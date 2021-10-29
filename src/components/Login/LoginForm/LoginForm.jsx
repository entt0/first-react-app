import {Field} from "redux-form";
import {maxLength, email, requiredField} from "../../../utils/validators/validators";
import s from './LoginForm.module.css'
import {Element} from "../../common/FormsControls/FormsControls";

const Input = Element('Input');
const maxLength20 = maxLength(20);
const maxLength40 = maxLength(40);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.errorMessage}>
                {props.error}
            </div>
            <div>
                <Field className={s.loginInput}
                       placeholder="email"
                       name={'email'}
                       component={Input}
                       validate={[requiredField, maxLength20, email]}
                />
            </div>
            <div>
                <Field className={s.passwordInput}
                       placeholder='password'
                       name={'password'}
                       component={Input}
                       type={'password'}
                       validate={[requiredField, maxLength40]}
                />
            </div>
            <div>
                <Field type='checkbox'
                       name={'rememberMe'}
                       component={'input'}
                />
                <span>Remember me</span>
            </div>
            <div>
                <button className={s.loginButton}>Log In</button>
            </div>
        </form>
    )
}

export default LoginForm;