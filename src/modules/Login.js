import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';

const Login = props => {
    console.log(props)
    const { errorMessage, handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={ handleSubmit(props.onSubmit) }>
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
            <RaisedButton type="submit">Log In</RaisedButton>
            <RaisedButton >Register</RaisedButton>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(Login);