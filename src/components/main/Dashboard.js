import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import ViewContainer from './ViewContainer';

export class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <ViewContainer user={this.props.user}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}
export default requiresLogin()(connect(mapStateToProps)(Dashboard));