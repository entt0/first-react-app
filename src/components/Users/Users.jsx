import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';
import {NavLink} from "react-router-dom";
import {useState} from "react";

let Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPotionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div>
            <div className={s.numbersWrapper}>

                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>BACK</button>
                }

                {pages
                    .filter(p => p >= leftPotionNumber && p <= rightPortionNumber)
                    .map(p => {
                        return <span className={`${s.pageNumber} ${props.currentPage === p && s.selectedPage}`}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })}

                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

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
                                          props.unfollow(u.id);
                                      }}>
                                delete</button>
                            : <button className={s.followButton}
                                      disabled={props.downloadingUsers.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>
                                add</button>}
                        <div className={s.description}>{u.name}</div>
                        <div className={s.description}>{u.status}</div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;