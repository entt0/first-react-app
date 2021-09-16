import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.svg';

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='usersPhoto'
                             className={s.avatar}/>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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