import React from "react";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextCreator(text));
        }

    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);

export default DialoguesContainer;