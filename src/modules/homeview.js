import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicSearch from './BasicSearch.js';

// div with search or enter
class HomeView extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <h2>Search by name or type of creature.</h2>
                    <BasicSearch onSubmit={ this.props.searchDatabaseSubmit }/>
                </div>
                <div>
                    {/* button should sent to route with input for new monster card */}
                    <RaisedButton onClick={ this.props.createSubmit }>Enter New Monster</RaisedButton>
                </div>
            </div>
        )
    }
}
    // add logic to change return from default to advanced search or monster creation input component
    // if state = default show homeview div
    // if state = creation show input
    // if state = search show advanced search
    // if state = results show results list
    // if state = card show monster card
    // print?


export default HomeView;