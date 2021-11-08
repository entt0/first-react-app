import {Field} from "redux-form";
import {Element} from "../../../common/FormsControls/FormsControls";

const Input = Element('Input');

const ChangeAva = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Change Profile Photo:</div>
            <Field name={'downloadedImg'}
                   component={Input}
                   type={"file"}
                   accept={".png, .jpg, .jpeg"}
            />
            <button>Accept</button>
        </form>
    );
}

export default ChangeAva;