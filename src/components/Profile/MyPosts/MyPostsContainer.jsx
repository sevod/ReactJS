import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState().ProfilePage;

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        postData={state.postData}
        newPostText={state.newPostText}/>);

}
export default MyPostsContainer;