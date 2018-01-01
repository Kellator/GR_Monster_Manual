import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import {checkLogin} from '../../redux/actions/AuthActions';
import {Link, Redirect} from 'react-router-dom';
import {showRegisterView} from '../../redux/actions/ViewActions';

export class Login extends React.Component {
    onSubmit = (values) => {
        return this.props.dispatch(checkLogin(values));
    };
    viewRegistration = () => {
        return this.props.dispatch(showRegisterView());
    }
    render() {
        let error;
        if(this.props.error) {
            error = (
                <div className="form-error">
                    {this.props.error}
                </div>
            )
        }
        return (
            <div>
                <div>
                    <form 
                        className="login-form"
                        onSubmit={ this.props.handleSubmit(values =>
                        this.onSubmit(values))
                    }>
                    {error}
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
                        <RaisedButton type="submit" primary={ true }>Log in</RaisedButton>
                    </form>
                </div>
                <div>
                    <h3>Not registered yet?  Register now!</h3>
                    <RaisedButton onClick={ this.props.handleSubmit(() => this.viewRegistration()) }>Register</RaisedButton>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'login'
})(Login);