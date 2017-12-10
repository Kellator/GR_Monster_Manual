import React from 'react';
import Login from './Login';

class NotAuthorized extends React.Component {
    render() {
        console.log(this.props);
        let loginSubmit = this.props.loginSubmit;
        let showRegisterSubmit = this.props.showRegisterSubmit;
        let message;
        return (
            <div>
                <Login loginSubmit={loginSubmit} showRegisterSubmit={showRegisterSubmit}/>
            </div>
        )
    }
}
export default NotAuthorized;