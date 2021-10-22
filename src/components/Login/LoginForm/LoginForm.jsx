import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email"
                       name={'email'}
                       component={'input'}/>
            </div>
            <div>
                <Field placeholder='password'
                       name={'password'}
                       component={'input'}
                       type={'password'}/>
            </div>
            <div>
                <Field type='checkbox'
                       name={'rememberMe'}
                       component={'input'}/> Remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

export default LoginForm;