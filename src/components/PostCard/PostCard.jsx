import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const baseUrl = "https://suitmedia-backend.suitdev.com"; // Sesuaikan dengan base URL

  // Fungsi untuk memotong judul yang terlalu panjang
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  // Mengatur format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="post-card">
      <div className="post-image">
        <img
          src={`${baseUrl}${post.small_image}`}
          alt={post.title}
          onError={(e) => e.target.src = 'https://via.placeholder.com/150x120'}
        />
      </div>
      <div className="post-details">
        <p className="post-date">{formatDate(post.published_at)}</p>
        <h3 className="post-title">{truncateTitle(post.title, 70)}</h3>
      </div>
    </div>
  );
};

export default PostCard;
