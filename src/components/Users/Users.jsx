import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                                usersAPI.deleteFriend(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }
                            }>
                                Unfollow</button>
                            : <button onClick={() => {
                                usersAPI.addFriend(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
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