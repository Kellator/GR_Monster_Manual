import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import ViewContainer from './ViewContainer';
import Grid from 'material-ui-next/Grid';

export class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <Grid 
                    container 
                    spacing={8}  
                    justify="center"
                    // alignItems="flex-start" 
                    id="dashboard"
                >
                    <ViewContainer id="view-container" user={this.props.user} />
                </Grid>
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