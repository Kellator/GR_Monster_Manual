import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Grid from 'material-ui-next/Grid';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { register, clearErrorMessage } from '../../redux/actions/AuthActions';
import { showLogin } from '../../redux/actions/ViewActions';

class Register extends React.Component {
    register = (values) => {        
        this.props.dispatch(register(values));
    }
    navToLogin = () => {
        this.props.dispatch(showLogin());
        this.props.dispatch(clearErrorMessage());
    }
    render() {
        let error;
        console.log(this.props.errorMessage);
        if(this.props.errorMessage) {
            error = (
                <div style={{ fontWeight: "bolder"}} className="form-error">
                    {this.props.errorMessage.message}
                </div>
            )
        }
        console.log(this.props)
        return (
            <Grid
                    container 
                    justify="center"
                    alignItems="center" 
                    direction="row"
                    style={{marginTop: "40px"}}
                >
                <Grid item xs={10} sm={7} md={4} lg={3} xl={2} 
                    className="div-opaque-color">
                    <Grid item className="">
                        <form onSubmit={ this.props.handleSubmit(values => this.register(values))} 
                            className="login-form"
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
                                label="email"
                                placeholder="email"
                                name="email"
                                component={ TextField }
                                underlineShow={true}
                                type="email"
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
                            <RaisedButton type="submit" 
                                style={{
                                    borderRadius: "1px",
                                    padding: "10px, 24px",
                                    fontWeight: "bold",
                                    width: "100%",
                                    marginTop: "2rem"
                                }}
                            >Submit</RaisedButton>
                        </form>
                    </Grid>
                    <Grid item className="div-center"
                        style={{
                            paddingBottom: "20px",
                            
                        }}
                    >
                        <h4 style={{display: "inline"}}>Already Registered? </h4>
                        <FlatButton 
                            onClick={ this.props.handleSubmit(() => this.navToLogin())}
                            style={{
                                borderRadius: "1px",
                                padding: "10px, 24px",
                                fontWeight: "bold",
                                color: "#AA0004",
                                textDecoration: "underline"
                            }}
                        >Login</FlatButton>
                    </Grid>
                </Grid>  
            </Grid>
        )
    }
}

Register = reduxForm({
    form: 'register'
})(Register);

const mapStateToProps = (state, props) => ({
    loggedIn: state.auth.currentUser !== null,
    view: state.view.type,
    errorMessage: state.auth.errorMessage
});
Register = connect(mapStateToProps)(Register);
export default Register;
