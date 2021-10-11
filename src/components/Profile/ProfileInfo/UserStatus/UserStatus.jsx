import React from "react";
import s from './UserStatus.module.css'
import {updateUserStatus} from "../../../../redux/profileReducer";

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}
                          className={s.statusText}>{this.props.status || 'change your status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true} value={this.state.status}/>
                    <button onClick={this.deactivateEditMode}
                            className={s.saveButton}>Save
                    </button>
                </div>
                }
            </>
        )
    }
}

export default UserStatus;