import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} placeholder={"Login"} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"}/> remember me
            </div>
            {error &&
            <div className={style.formSummaryError}>
                {error}
            </div>
            }
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


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export default connect(mapStateToProps, {loginThunk})(Login);