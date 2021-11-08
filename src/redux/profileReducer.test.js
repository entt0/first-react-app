import profileReducer, {addPost, deletePost, setStatus} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
        {id: 2, message: 'I want to be a programmer', likes: 5},
        {id: 3, message: 'YO', likes: 4},
    ],
    status: null,
}


test('the amount of posts should increase', () => {
    //1. test data

    //2. test action
    let action = addPost('i am noob')
    //3. expectation
       let newState =  profileReducer(state,action);
    expect(newState.posts.length).toBe(4)
});

test(`new post message should be 'i am noob' `, () => {
    //1. test data

    //2. test action
    let action = addPost('i am noob')
    //3. expectation
       let newState =  profileReducer(state,action);
    expect(newState.posts[3].message).toBe('i am noob')
});

test(`status message should be 'scherzkeks' `, () => {
    //1. test data

    //2. test action
    let action = setStatus('scherzkeks')
    //3. expectation
       let newState =  profileReducer(state,action);
    expect(newState.status).toBe('scherzkeks')
});

test(`the quantity of posts must be decreased`, () => {
    //1. test data

    //2. test action
    let action = deletePost(1)
    //3. expectation
       let newState =  profileReducer(state,action);
    expect(newState.posts.length).toBe(2)
});