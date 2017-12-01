import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

const Register = props => {
    console.log(props)
    const { errorMessage, handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={ handleSubmit(props.onSubmit) }>
                <Field
                    label="username"
                    placeholder="username"
                    name="username"
                    component={ TextField }
                />
                <Field
                    label="email"
                    placeholder="email"
                    name="email"
                    component={ TextField }
                    type="email"
                />
                <Field
                    label="password"
                    placeholder="password"
                    name="password"
                    component={ TextField }
                    type="password"
                />
                <RaisedButton type="submit">REGISTER</RaisedButton>
            </form>
            <div>
                <h3>Already Registered? Go to Log In.</h3>
                <RaisedButton type="submit">LOGIN</RaisedButton>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'register'
})(Register);
