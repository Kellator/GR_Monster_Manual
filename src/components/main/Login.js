import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { checkLogin } from '../../redux/actions/AuthActions';
import { showRegisterView } from '../../redux/actions/ViewActions';

export class Login extends React.Component {
    onSubmit = (values) => {
        return this.props.dispatch(checkLogin(values));
    };
    viewRegistration = () => {
        return this.props.dispatch(showRegisterView());
    }
    render() {
        console.log(this.props);
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        let error;
        if(this.props.error) {
            error = (
                <div className="form-error">
                    {this.props.error}
                </div>
            )
        }
        return (
            <div className="div-center div-login">
                <div className="center-login">
                    <div className="">
                        <form 
                            className="login-form form-center"
                            onSubmit={ this.props.handleSubmit(values =>
                            this.onSubmit(values))}
                            style={{
                            display: 'block'
                            }}
                        >

                        {error}
                            <Field
                                label="username"
                                placeholder="username"
                                name="username"
                                component={ TextField }
                                style={{
                                    display: 'block'
                                    }}
                            />
                            <Field
                                label="password"
                                placeholder="password"
                                name="password"
                                component={ TextField }
                                type="password"
                                style={{
                                    display: 'block'
                                    }}
                            />
                            <RaisedButton 
                                type="submit" 
                                className="button-main"
                                style={{
                                    borderRadius: '1px',
                                    padding: '10px, 24px',
                                    fontWeight: 'bold',
                                }}
                                >Log in</RaisedButton>
                        </form>
                    </div>
                    <div className="form-center align-center">
                        <h3>Not registered yet?  Register now!</h3>
                        <RaisedButton 
                            onClick={ this.props.handleSubmit(() => this.viewRegistration()) }
                            className="button-main"
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                color: 'rgba(255, 255, 255, 1)' 
                            }}
                            >Register
                        </RaisedButton>
                    </div>
                </div>
            </div>
        )
    }
}

Login = reduxForm({
    form: 'login'
})(Login);

const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.currentUser !== null,
    view: state.view.type
})
Login = connect(mapStateToProps)(Login);
export default Login;