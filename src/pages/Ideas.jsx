import React from 'react'
import Header from '../components/Header/header.jsx';
import Banner from '../components/Banner/banner.jsx';
import ListPost from '../components/ListPost/ListPost.jsx';
import Pagination from '../components/Pagination/pagination.jsx';

const Ideas = () => {
  return (
    <>
      <Header />
      <Banner imageUrl="banner-image-url.jpg" title="Ideas" />
      <ListPost />
    </>

  )
}

export default Ideas