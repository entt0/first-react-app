import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder='Password' name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

export default LoginForm;