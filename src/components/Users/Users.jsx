import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photo: 'https://i.mr-7.ru/photos/2020/12/resize_80s7A8qyMK94nm7zx2TN.jpg',
                followed: false,
                fullName: 'Dron',
                status: "I like BMW",
                city: 'Udomlya',
                country: 'Russia'
            },
            {
                id: 2,
                photo: 'https://sun9-82.userapi.com/impg/AopnNY6pLkBSSs_QFtQeEZFyD09ZgnNBrqxzcw/8LxR3vDobRM.jpg?size=1133x1133&quality=96&sign=92f91a9f1c55d30944755bf0ed4a61d6&type=album',
                followed: true,
                fullName: 'Kristina',
                status: "I'm codding now",
                city: 'Moscow',
                country: 'Russia'
            },
            {
                id: 3,
                photo: 'https://sun9-3.userapi.com/impg/ksXQQcCwp06oWQBrXRmIlNlIiWgQBtgnMaCZBw/iYEC2Vt6Urg.jpg?size=1536x864&quality=96&sign=0e4a3492f8335ce6953d40b297f563ae&type=album',
                followed: false,
                fullName: 'Vlad',
                status: "nothing to do",
                city: 'Tver',
                country: 'Russia'
            }
        ])
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id} className={s.obj}>
                    <img src={u.photo} alt='usersPhoto' className={s.avatar}/>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.country}</div>
                    <div>{u.city}</div>
                </div>)
            }
        </div>
    )
}

export default Users;