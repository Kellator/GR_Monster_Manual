import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Error extends React.Component {
    render() {
        console.log(this.props);
        let loginSubmit = this.props.loginSubmit;
        let showRegisterSubmit = this.props.showRegisterSubmit;
        let database = this.props.database;
        let login = this.props.login;
        let errorMessage;
        if(database.error) {
            errorMessage = 
            <div>
                <h1>HTTP Error {database.error.response.status}</h1>
                <p>{database.error.message}</p>
                <p>You need to be logged in to do that.</p>
            </div>
        };
        return (
            <div>
                { errorMessage }
                <Login loginSubmit={loginSubmit} showRegisterSubmit={showRegisterSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    database: state.database,
    login: state.login
});
export default connect(mapStateToProps)(Error);