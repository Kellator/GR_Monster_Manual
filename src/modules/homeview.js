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
                    <RaisedButton onClick={ this.props.createSubmit }>Create New Creature Card</RaisedButton>
                </div>
            </div>
        )
    }
}
export default HomeView;