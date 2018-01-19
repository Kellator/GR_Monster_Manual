import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../redux/actions/AuthActions';
import { showLogin } from '../../redux/actions/ViewActions';

class Register extends React.Component {
    register = (values) => {        
        this.props.dispatch(register(values));
    }
    navToLogin = () => {
        this.props.dispatch(showLogin());
    }
    render() {
        console.log(this.props)
        return (
            <Grid item xs={10} sm={7} md={4} lg={3} xl={2} 
                className="div-opaque-color">
                <Grid item className="">
                    <form onSubmit={ this.props.handleSubmit(values => this.register(values))} 
                        className="login-form"
                        style={{
                            display: 'block',
                            padding: '20px'
                            }}
                    >
                        <Field
                            label="username"
                            placeholder="username"
                            name="username"
                            component={ TextField }
                            underlineShow={true}
                            type="text"
                            style={{
                                display: 'block',
                                width: '100%'
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
                                display: 'block',
                                width: '100%'
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
                                display: 'block',
                                width: '100%'
                                }}
                        />
                        <RaisedButton type="submit" 
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                width: '100%',
                                marginTop: '2rem'
                            }}
                        >Submit</RaisedButton>
                    </form>
                </Grid>
                <Grid item className="div-center">
                    <h3>Already Registered? Go to Log In.</h3>
                    <RaisedButton 
                        onClick={ this.props.handleSubmit(() => this.navToLogin())}
                        style={{
                            borderRadius: '1px',
                            padding: '10px, 24px',
                            fontWeight: 'bold',
                        }}
                    >Login</RaisedButton>
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
    view: state.view.type
});
Register = connect(mapStateToProps)(Register);
export default Register;
