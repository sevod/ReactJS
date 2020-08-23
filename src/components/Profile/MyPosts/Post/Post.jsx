import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://i.pinimg.com/originals/f3/af/3a/f3af3ab02e4ea2074d74c48770ed6784.png'/>
                {props.message}
            </div>

            <span className={s.like}>like {props.likesCount}</span>
            <span className={s.like}> deslike</span>
        </div>
    );
}
export default Post;