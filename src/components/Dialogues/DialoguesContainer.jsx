import React from "react";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialoguesReducer";
import Dialogues from "./Dialogues";

const DialoguesContainer = (props) => {
    let state = props.store.getState().dialoguesPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let updateMessageText = (text) => {
        let action = updateMessageTextCreator(text);
        props.store.dispatch(action);
    }

    return <Dialogues state={state} sendMessage={sendMessage} updateMessageText={updateMessageText}/>;
}

export default DialoguesContainer;