import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png' />
      <div>
        post 1
      </div>
      <span>like</span>
      <span> deslike</span>
    </div>
  );
}
export default Post;