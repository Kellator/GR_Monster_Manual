import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
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
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className="div-login">
                <Grid item>
                    <div className="">
                        <form 
                            className="login-form"
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
                                    display: 'block',
                                    width: '100%'
                                    }}
                            />
                            <Field
                                label="password"
                                placeholder="password"
                                name="password"
                                component={ TextField }
                                type="password"
                                style={{
                                    display: 'block',
                                    width: '100%'
                                    }}
                            />
                            <RaisedButton 
                                type="submit" 
                                className="button-main"
                                style={{
                                    borderRadius: '1px',
                                    padding: '10px, 24px',
                                    fontWeight: 'bold',
                                    width: '100%',
                                    marginTop: '2rem'
                                }}
                                >Log in</RaisedButton>
                        </form>
                    </div>
                    <div className="div-center">
                        <p style={{color:"#FE0006", fontWeight: "bolder"}}>Not registered yet?</p>
                        <RaisedButton 
                            onClick={ this.props.handleSubmit(() => this.viewRegistration()) }
                            className="button-main"
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                            }}
                            >Register
                        </RaisedButton>
                    </div>
                </Grid>
            </Grid>
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