import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../redux/actions/AuthActions';

class Register extends React.Component {
    onSubmit = (values) => {
        return this.props.dispatch(register(values));
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={ this.props.handleSubmit(values => this.onSubmit(values))} >
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
                    <RaisedButton type="submit" primary={ true }>SUBMIT</RaisedButton>
                </form>
                <div>
                    <h3>Already Registered? Go to Log In.</h3>
                    <RaisedButton onClick={ console.log("no") }>LOGIN</RaisedButton>
                </div>
            </div>  
        )
    }
}

export default reduxForm({
    form: 'register'
})(Register);
