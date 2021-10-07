import React from "react";
import {sendMessage, updateMessageText} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

const DialoguesContainer = WithAuthRedirect(connect(mapStateToProps, {sendMessage, updateMessageText})(Dialogues));

export default DialoguesContainer;