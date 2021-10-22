import ava from '../assets/Images/user.svg'

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogues: [
        {id: 1, name: 'Nikita', avatar: ava},
        {id: 2, name: 'Kris', avatar: ava},
        {id: 3, name: 'Vlad', avatar: ava},
        {id: 4, name: 'Tor', avatar: ava},
        {id: 5, name: 'Klim', avatar: ava},
        {id: 6, name: 'Dron', avatar: ava}
    ],
    messages: [
        {id: 1, message: 'Hi,bro'},
        {id: 2, message: 'How is your exam?'},
        {id: 3, message: 'My Congratulations'}
    ],
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4, message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialoguesReducer;