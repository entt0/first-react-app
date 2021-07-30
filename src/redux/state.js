let state = {
    sideBar: {
        friends: [
            {avatar: 'https://sun9-3.userapi.com/impg/ksXQQcCwp06oWQBrXRmIlNlIiWgQBtgnMaCZBw/iYEC2Vt6Urg.jpg?size=1536x864&quality=96&sign=0e4a3492f8335ce6953d40b297f563ae&type=album'},
            {avatar: 'https://sun9-82.userapi.com/impg/AopnNY6pLkBSSs_QFtQeEZFyD09ZgnNBrqxzcw/8LxR3vDobRM.jpg?size=1133x1133&quality=96&sign=92f91a9f1c55d30944755bf0ed4a61d6&type=album'},
            {avatar: 'https://sun9-75.userapi.com/impg/Zk3sSQEmBQv8uzaddDD0yMP0zDAkbMrcsB18pA/z7l8uQhsS-c.jpg?size=2560x1920&quality=96&sign=7605eb19998f6c87064aae783dd119fd&type=album'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
            {id: 2, message: 'I want to be a programmer', likes: 5},
            {id: 2, message: 'YO', likes: 4},
        ]
    },
    dialoguesPage: {
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
        answers: [
            {id: 1, answer: 'Hi'},
            {id: 2, answer: 'Not Bad'},
            {id: 3, answer: ':)'}
        ],

    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5, message: postMessage, likes:0
    };
    state.profilePage.posts.push(newPost);
}

export default state;
