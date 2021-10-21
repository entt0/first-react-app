import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const onSubmit = (formData) => {
// задиспачить эти данные в thunk и отправить на сервак, чтобы залогиниться
// кроме того, надо законнектить Login в store как обычно
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