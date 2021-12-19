import {Field} from "redux-form";
import {Element} from "../../../common/FormsControls/FormsControls";
import s from './ChangeAva.module.css'

const Input = Element('Input');

const ChangeAva = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.description}>Change Profile Photo:</div>
            <Field name={'downloadedImg'}
                   className={s.filesButton}
                   component={Input}
                   type={"file"}
                   accept={".png, .jpg, .jpeg"}
            />
            <button className={s.submitButton}>Accept Photo</button>
        </form>
    );
}

export default ChangeAva;