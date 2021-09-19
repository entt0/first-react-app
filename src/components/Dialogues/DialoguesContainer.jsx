import React from "react";
import {sendMessage, updateMessageText} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

const DialoguesContainer = connect(mapStateToProps, {sendMessage, updateMessageText})(Dialogues);

export default DialoguesContainer;