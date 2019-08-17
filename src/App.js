import React, { useState, useEffect } from 'react';
import Posts from './components/posts';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="container mt-5">
      <h1 className = 'text-primary mb-3'>My Blog</h1>
      <Posts posts={posts} loading={loading}/>
    </div>
  );
};

export default App;
