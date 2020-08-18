import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        new post
      </div>
      <div className={s.posts}>
        <Post messege = "first" likesCount = '3'/>
        <Post messege = "second" likesCount = '5'/>
        <Post messege = "third" likesCount = '1'/>
        <Post messege = "4" likesCount = '0'/>
        <Post messege = "5" likesCount = '2'/>
      </div>
    </div>
  );
}
export default MyPosts;