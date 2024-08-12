import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination/pagination';
import './ListPost.css';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState('-published_at');
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await api.get('/api/ideas', {
          params: {
            'page[number]': page,
            'page[size]': pageSize,
            'append[]': ['small_image', 'medium_image'],
            'sort': sortOrder,
          },
        });

        setPosts(response.data.data || []);
        setTotalPosts(response.data.meta.total || 0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, pageSize, sortOrder]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);  // Reset to first page when changing page size
  };

  const totalPages = Math.ceil(totalPosts / pageSize);
  const startPostIndex = (page - 1) * pageSize + 1;
  const endPostIndex = Math.min(page * pageSize, totalPosts);

  return (
    <div className="list-post">
      <div className="controls-container">
        <p className="showing-info">
          Showing {startPostIndex}-{endPostIndex} of {totalPosts}
        </p>
        <div className="controls">
          <label className="label">Per page:</label>
          <select 
            value={pageSize} 
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <label className="label">Sort by:</label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="post-list">
            {posts.map(post => (
              <li key={post.id} className="post-item">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ListPost;