import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder={"Login"} name={"login"} validate = {[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder={"Password"} name={"password"} validate = {[required]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const onSubmit = (formData) => {
    console.log(formData);
}

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
}

export default Login;