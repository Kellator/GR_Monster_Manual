import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'material-ui-next/Grid';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { showLogin } from '../../redux/actions/ViewActions';
import Login from './Login';

export function Landing(props) {
    // if already logged in, redirect to user's dashboard
    if(props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Grid 
            item 
            xs={12} sm={12} md={10} lg={8} xl={8} 
            style={{padding: '3rem'}}
            className="div-absolute large-text div-center"
        >
            <h1>Welcome to the Index of Creatures!</h1>
            <h2>Get into game faster.</h2>
            <div>
                <p>
                    As an avid roleplayer, I'm always looking for ways to get me and my friends into game faster.  
                    One of the most time consuming things for game-masters, DMs, and plot staff can be trying to find the stats for their NPCs or non-player-characters.
                    Many game-masters have only old-school paper systems or books to flip through.  This can lead to a lot of inefficient page flipping while game-masters 
                    search for a specific creature or type of creature and players wait for an adventure to start.
                    With the IoC, all you need is your creature's name or category. 
                </p>
                <p>
                    Are your players about to enter a crypt filled with undead?  Need to know the stats for your skeletons, wraiths, death knights, and a lich to control them all?
                    Just put UNDEAD into the search bar for IoC and you'll get a list of creatures you can choose from!
                </p>
                <p>
                    Originally designed for the plot team of a Michigan based LARP.
                </p>
                <p>
                    If you're ready to test out the IoC, click below.  Feel free to create your own user credentials or use the demo.  View existing creatures or create your own.
                    Demonstration instructions throughout.
                </p>
            </div>
            {/* <Login /> */}
        </Grid>
    )
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
});
export default connect(mapStateToProps)(Landing);