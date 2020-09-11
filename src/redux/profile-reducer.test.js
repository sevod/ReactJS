import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
let state = {
    //1. готовим исходные данные
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 30},
        {id: 3, message: 'Yo!', likesCount: 1},
        {id: 4, message: 'Yo!', likesCount: 0}
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expection
    expect (newState.postData.length).toBe(5);
});



test('new message of posts should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expection
    expect (newState.postData[4].message).toBe("it-kamasutra.com");
});

test('likesCount of posts should be 0', () => {
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expection
    expect (newState.postData[4].likesCount).toBe(0);
});

test('after deleting length of posts should be decrement', () => {
    let action = deletePostActionCreator(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expection
    expect (newState.postData.length).toBe(3);
});
test("after deleting length of posts should't be decrement if id is incorrect", () => {
    let action = deletePostActionCreator(100);

    //2. action
    let newState = profileReducer(state, action);

    //3. expection
    expect (newState.postData.length).toBe(4);
});


