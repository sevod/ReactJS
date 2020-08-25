const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEST = 'UPDATE-NEW-POST-TEXT';

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
    _callSubscriber(state){},

    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; //observer - наблюдатель
    },

    dispatch(action){ // {type: 'ADD-POST'}
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: store._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else {

            if (action.type === UPDATE_NEW_POST_TEST){
                        store._state.profilePage.newPostText = action.newText;
                        store._callSubscriber(this._state);
                    }
        }
    }
};

export const addPostActionCreator = ()  =>  ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({
        type: UPDATE_NEW_POST_TEST,
        newText: text
})

export default store;

window.store = store;

