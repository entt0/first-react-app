import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            <div className={s.numbersWrapper}>
                {pages.map(p => {
                    if (p <= 30) {
                        return <span className={`${s.pageNumber} ${props.currentPage === p && s.selectedPage}`}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    }
                })}
            </div>
            <div>
                {props.users.map(u =>
                    <div key={u.id} className={s.obj}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='usersPhoto'
                                 className={s.avatar}/>
                        </NavLink>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '124a82dc-5ca5-4236-a5c2-61c8d456d8dc'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }
                            }>
                                Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '124a82dc-5ca5-4236-a5c2-61c8d456d8dc'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Follow</button>}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;