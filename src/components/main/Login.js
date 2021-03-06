import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm, focus } from 'redux-form';
import { checkLogin, clearErrorMessage } from '../../redux/actions/AuthActions';
import { showRegisterView } from '../../redux/actions/ViewActions';
import { required, nonEmpty } from '../validators';

export class Login extends React.Component {
    onSubmit = (values) => {
        return this.props.dispatch(checkLogin(values));
    };
    viewRegistration = () => {
        this.props.dispatch(showRegisterView());
        this.props.dispatch(clearErrorMessage());
    }
    render() {
        console.log(this.props.errorMessage);
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        let error;
        if(this.props.errorMessage) {
            error = (
                <div style={{color:"#FE0006", fontWeight: "bolder"}} className="form-error">
                    {this.props.errorMessage}
                </div>
            )
        }
        return (
                <Grid item xs={10} sm={7} md={4} lg={3} xl={2} 
                    className="div-opaque-color">
                    <Grid item className="">
                        <form 
                            className="login-form"
                            onSubmit={ this.props.handleSubmit(values =>
                            this.onSubmit(values))}
                            style={{
                            display: "block",
                            padding: "20px"
                            }}
                        >
                        {error}
                            <Field
                                label="username"
                                placeholder="username"
                                name="username"
                                component={ TextField }
                                underlineShow={true}
                                type="text"
                                style={{
                                    display: "block",
                                    width: "100%"
                                    }}
                            />
                            <Field
                                label="password"
                                placeholder="password"
                                name="password"
                                component={ TextField }
                                underlineShow={true}
                                type="password"
                                style={{
                                    display: "block",
                                    width: "100%"
                                    }}
                            />
                            <RaisedButton 
                                type="submit" 
                                className="button-main"
                                
                                style={{
                                    borderRadius: "1px",
                                    padding: "10px, 24px",
                                    fontWeight: "bold",
                                    width: "100%",
                                    marginTop: "2rem"
                                }}
                                >Log in</RaisedButton>
                        </form>
                    </Grid>
                    <Grid item className="div-center"
                        style={{
                            paddingBottom: "20px"
                        }}
                    >
                        <h4 style={{display: "inline"}}>Not registered yet?</h4>
                        <FlatButton 
                            onClick={ this.props.handleSubmit(() => this.viewRegistration()) }
                            className="button-main"                          
                            style={{
                                borderRadius: "1px",
                                padding: "10px, 24px",
                                fontWeight: "bold",
                                color: "#AA0004",
                                textDecoration: "underline"
                            }}
                            >Register
                        </FlatButton>
                    </Grid>
                </Grid>            
        )
    }
}

Login = reduxForm({
    form: 'login',
    destroyOnUnmount: true,
    onSubmitFail: (errors, dispatch) => dispatch(focus('login','username'))
})(Login);

const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.currentUser !== null,
    view: state.view.type,
    errorMessage: state.auth.errorMessage
})
Login = connect(mapStateToProps)(Login);
export default Login;