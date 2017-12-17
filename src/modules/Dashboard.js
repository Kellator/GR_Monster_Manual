import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../redux/actions/AuthActions';

export class Dashboard extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
    }
    render() {
        return(
            <div>
                user: {this.props.user}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { currentUser } = state.auth;
    console.log(currentUser);
    return {
        user: state.auth.user
    }
}
export default requiresLogin()(connect(mapStateToProps)(Dashboard));