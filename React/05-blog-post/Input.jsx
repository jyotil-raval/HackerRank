import React from 'react';

function Input({ blog, setBlog }) {
  return (
    <div className='layout-column justify-content-center align-items-center'>
      <input
        className='w-100'
        type='text'
        placeholder='Enter Title'
        value={blog.title}
        data-testid='title-input'
        onChange={(e) => {
          setBlog((prev) => {
            return {
              ...prev,
              title: e.target.value
            };
          });
        }}
      />
      <textarea
        className='mt-10 w-100'
        placeholder='Enter Description'
        value={blog.desc}
        data-testid='description-input'
        onChange={(e) => {
          setBlog((prev) => {
            return {
              ...prev,
              desc: e.target.value
            };
          });
        }}
      />
    </div>
  );
}

export default Input;
