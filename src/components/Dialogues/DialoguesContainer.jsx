import React from "react";
import {sendMessage, updateMessageText} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateMessageText}),
    withAuthRedirect
)(Dialogues);