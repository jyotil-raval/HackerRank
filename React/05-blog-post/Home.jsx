import React, { useState } from 'react';
import Input from './Input';
import PostDisplay from './PostDisplay';

function Home() {
  const [blogId, setBlogId] = useState(0);
  const [blogList, setBlogList] = useState([]);
  const [blog, setBlog] = useState({
    title: '',
    desc: ''
  });

  const handleClick = () => {
    if (!blog.title || !blog.desc) {
      return;
    }
    setBlogList((prev) => {
      return [
        ...prev,
        {
          ...blog,
          id: blogId + 1
        }
      ];
    });
    setBlog({
      title: '',
      desc: ''
    });
    setBlogId((prev) => prev + 1);
  };

  return (
    <div className='text-center ma-20'>
      <div className='mb-20'>
        <Input blog={blog} setBlog={setBlog} />
        <button data-testid='create-button' className='mt-10' onClick={handleClick}>
          Create Post
        </button>
      </div>
      <div className='posts-section'>
        <PostDisplay blogList={blogList} setBlogList={setBlogList} />
      </div>
    </div>
  );
}

export default Home;
