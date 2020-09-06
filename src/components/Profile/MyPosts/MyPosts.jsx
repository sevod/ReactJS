import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.postData.map(
        postData => (<Post message={postData.message} likesCount={postData.likesCount}/>)
    );

    const onSubmit = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

const onAddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <Field component={'button'}>Add post</Field>
            </div>
        </form>

    );
}

const AddPostReduxForm = reduxForm({form: 'addProfilePostReduxForm'})(onAddPost);

export default MyPosts;