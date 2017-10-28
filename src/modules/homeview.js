import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';

// div with search or enter
class HomeView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Search by name or type of creature.</h2>
                    <TextField placeholder="Wight"></TextField><RaisedButton >Submit</RaisedButton><br></br>
                    {/* buttons should send to route with advanced search for name & type & level */}
                    <RaisedButton onClick={ this.props.searchSubmit }>Advanced Search</RaisedButton>
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