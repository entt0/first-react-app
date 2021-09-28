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
                            ? <button className={s.followButton}
                                      disabled={props.downloadingUsers.some(id => id === u.id)}
                                      onClick={() => {
                                          props.toggleIsFollowing(true, u.id);
                                          usersAPI.deleteFriend(u.id)
                                              .then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.unfollow(u.id);
                                                  }
                                                  props.toggleIsFollowing(false, u.id);
                                              })
                                      }
                                      }>Unfollow</button>
                            : <button className={s.followButton}
                                      disabled={props.downloadingUsers.some(id => id === u.id)}
                                      onClick={() => {
                                          props.toggleIsFollowing(true, u.id);
                                          usersAPI.addFriend(u.id)
                                              .then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.follow(u.id);
                                                  }
                                                  props.toggleIsFollowing(false, u.id);
                                              })
                                      }
                                      }>Follow</button>}
                        <div className={s.description}>{u.name}</div>
                        <div className={s.description}>{u.status}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;