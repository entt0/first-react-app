import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";
import ChangeAva from "./ChangeAva";
import {updateUserPhoto} from "../../../../redux/profileReducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

const NewAvaReduxForm = reduxForm({form: 'updateAvatar'})(ChangeAva);

const ChangeAvaContainer = (props) => {

    const onSubmit = (formData) => {
        debugger
        props.updateUserPhoto(formData.downloadedImg[0]);
    }

    return (
        <div>
            <NewAvaReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {updateUserPhoto}),
    withAuthRedirect
)(ChangeAvaContainer);