const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogues: [
        {
            id: 1,
            name: 'Nikita',
            avatar: 'https://sun9-75.userapi.com/impg/Zk3sSQEmBQv8uzaddDD0yMP0zDAkbMrcsB18pA/z7l8uQhsS-c.jpg?size=2560x1920&quality=96&sign=7605eb19998f6c87064aae783dd119fd&type=album'
        },
        {
            id: 2,
            name: 'Kris',
            avatar: 'https://sun9-43.userapi.com/impg/IVw0Qv9C6ppB6rtMuOt6-rf0PUWUU0MSdFiJlg/2Hp3E30riJQ.jpg?size=850x850&quality=96&sign=9abc79847d39550810a0c89c9d8bea88&type=album'
        },
        {
            id: 3,
            name: 'Vlad',
            avatar: 'https://sun9-15.userapi.com/impg/gFQ1mOyi91sicV9nzSH_Kv69R_dF-utu50Zm7Q/7SdK7Dv3Dic.jpg?size=660x716&quality=96&sign=d6d8546e0e531cc5bc95976c7b29beeb&type=album'
        },
        {
            id: 4,
            name: 'Tor',
            avatar: 'https://sun9-43.userapi.com/impg/IVw0Qv9C6ppB6rtMuOt6-rf0PUWUU0MSdFiJlg/2Hp3E30riJQ.jpg?size=850x850&quality=96&sign=9abc79847d39550810a0c89c9d8bea88&type=album'
        },
        {
            id: 5,
            name: 'Klim',
            avatar: 'https://sun9-43.userapi.com/impg/IVw0Qv9C6ppB6rtMuOt6-rf0PUWUU0MSdFiJlg/2Hp3E30riJQ.jpg?size=850x850&quality=96&sign=9abc79847d39550810a0c89c9d8bea88&type=album'
        },
        {
            id: 6,
            name: 'Dron',
            avatar: 'https://sun9-43.userapi.com/impg/IVw0Qv9C6ppB6rtMuOt6-rf0PUWUU0MSdFiJlg/2Hp3E30riJQ.jpg?size=850x850&quality=96&sign=9abc79847d39550810a0c89c9d8bea88&type=album'
        }
    ],
    messages: [
        {id: 1, message: 'Hi,bro'},
        {id: 2, message: 'How is your exam?'},
        {id: 3, message: 'My Congratulations'}
    ],
    newMessageText: '',
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4, message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export default dialoguesReducer;