const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
        ],
        newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: state.newMessageBody}],
                newMessageBody: ''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newText
            };
        }
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (text = initialState.newMessageBody) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;