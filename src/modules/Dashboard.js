import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../redux/actions/protected-data';
import BasicSearch from './BasicSearch';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    render() {
        console.log(this.props)
        return(
            <div>
                <div>
                    Welcome, {this.props.user.username}
                </div>
                <BasicSearch />
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