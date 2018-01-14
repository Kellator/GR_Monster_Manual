import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
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
            <div>
                <form onSubmit={ this.props.handleSubmit(values => this.register(values))} >
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
                    <RaisedButton type="submit" secondary={true}>SUBMIT</RaisedButton>
                </form>
                <div>
                    <h3>Already Registered? Go to Log In.</h3>
                    <RaisedButton 
                        onClick={ this.props.handleSubmit(() => this.navToLogin())}
                        secondary={true}
                    >LOGIN</RaisedButton>
                </div>
            </div>  
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
