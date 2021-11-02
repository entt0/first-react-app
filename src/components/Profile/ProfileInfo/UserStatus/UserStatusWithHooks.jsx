import React, {useEffect, useState} from "react";
import s from './UserStatus.module.css'

const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                    <span className={s.statusText}
                          onClick={activateEditMode}
                    >{props.status || 'change your status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       value={status}
                />
                <button onClick={deactivateEditMode}
                        className={s.saveButton}>Save
                </button>
            </div>
            }
        </>
    )
}

export default UserStatusWithHooks;