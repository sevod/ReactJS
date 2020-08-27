import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    debugger;
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().ProfilePage;

                    let addPost = () => {
                        let action = addPostActionCreator()
                        store.dispatch(action);
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 postData={state.postData}
                                 newPostText={state.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;