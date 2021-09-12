import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=8').then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id} className={s.obj}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='usersPhoto'
                             className={s.avatar}/>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;