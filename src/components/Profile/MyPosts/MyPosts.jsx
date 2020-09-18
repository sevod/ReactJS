import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo ( (props) => {
    let postElements = props.postData.map(
        postData => (<Post key={postData.id} message={postData.message} likesCount={postData.likesCount}/>)
    );

    const onSubmit = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postBlock}>
            {console.log("RENDER")}
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
})

const maxLength30 = maxLengthCreator(30);

const onAddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newPostText'} validate={[required, maxLength30]}
                       placeholder={"Post message"}/>
            </div>
            <div>
                <Field component={'button'}>Add post</Field>
            </div>
        </form>

    );
}

const AddPostReduxForm = reduxForm({form: 'addProfilePostReduxForm'})(onAddPost);

export default MyPosts;