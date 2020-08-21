import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 30},
        {id: 3, message: 'Yo!', likesCount: 1},
        {id: 4, message: 'Yo!', likesCount: 0}
    ];

    let postElements = postData.map(
        postData => (<Post message={postData.message} likesCount={postData.likesCount}/>)
    );

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;