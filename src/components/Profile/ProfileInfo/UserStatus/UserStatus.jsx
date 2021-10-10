import React from "react";
import s from './UserStatus.module.css'

class UserStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode.bind(this)}
                          className={s.statusText}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} value={this.props.status}/>
                    <button onClick={this.deactivateEditMode.bind(this)}
                            className={s.saveButton}>Save
                    </button>
                </div>
                }
            </>
        )
    }
}

export default UserStatus;