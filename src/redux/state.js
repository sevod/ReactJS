let store = {
    _state : {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 30},
                {id: 3, message: 'Yo!', likesCount: 1},
                {id: 4, message: 'Yo!', likesCount: 0}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Da da!'},
                {id: 4, message: 'Yo!'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state){},
    addPost(){
        let newPost = {
            id: 5,
            message: store._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        store._state.profilePage.newPostText = newText;
        store._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer; //observer - наблюдатель
    }
};

export default store;

window.store = store;
//
// let renderEntireTree;
//
// let state = {
//     profilePage: {
//         postData: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 12},
//             {id: 2, message: "It's my first post", likesCount: 30},
//             {id: 3, message: 'Yo!', likesCount: 1},
//             {id: 4, message: 'Yo!', likesCount: 0}
//         ],
//         newPostText: 'it-kamasutra.com'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//             {id: 3, message: 'Da da!'},
//             {id: 4, message: 'Yo!'}
//         ]
//     }
// }
//
// export const addPost = () => {
//   let newPost = {
//       id: 5,
//       message: state.profilePage.newPostText,
//       likesCount: 0
//   };
//   state.profilePage.postData.push(newPost);
//   state.profilePage.newPostText = '';
//   renderEntireTree(state)
// };
//
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree(state);
// };
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer; //observer - наблюдатель
// }

