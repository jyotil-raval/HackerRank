import React from 'react';

function PostDisplay({ blogList, setBlogList }) {
  const handleClick = (id) => {
    const updatedBlogList = blogList.filter((blog, i) => {
      return blog.id !== id;
    });
    setBlogList(updatedBlogList);
  };
  return (
    <div data-testid='posts-container' className='flex wrap gap-10'>
      {blogList &&
        blogList.map((blog) => {
          return (
            <div className='post-box' key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button onClick={() => handleClick(blog.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default PostDisplay;
