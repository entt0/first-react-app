import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersNumber(response.data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={s.numbersWrapper}>
                    {pages.map(p => {
                        if (p <= 30) {
                            return <span className={`${s.pageNumber} ${this.props.currentPage === p && s.selectedPage}`}
                                         onClick={() => {
                                             this.onPageChanged(p)
                                         }}>{p}</span>

                        }
                    })}
                </div>
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