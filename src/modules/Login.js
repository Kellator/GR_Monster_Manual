import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

const Login = props => {
    console.log(props)
    const { errorMessage, handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <div>
                <form onSubmit={ handleSubmit(props.loginSubmit) }>
                    <Field
                        label="username"
                        placeholder="username"
                        name="username"
                        component={ TextField }
                    />
                    <Field
                        label="password"
                        placeholder="password"
                        name="password"
                        component={ TextField }
                        type="password"
                    />
                    <RaisedButton type="submit" primary={ true }>LOG IN</RaisedButton>
                </form>
            </div>
            <div>
                <h3>Not registered yet?  Register now!</h3>
                <RaisedButton onClick={props.showRegisterSubmit }>REGISTER</RaisedButton>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'login'
})(Login);