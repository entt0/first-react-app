import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const onSubmit = (formData) => {
    authAPI.sendLoginFormData(formData.email, formData.password, formData.rememberMe)
    authAPI.checkAuthorization()
}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;