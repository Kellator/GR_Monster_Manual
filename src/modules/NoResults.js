import React from 'react';
import BasicSearch from './BasicSearch.js';
import RaisedButton from 'material-ui/RaisedButton';

class NoResults extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h3>Sorry!  Your search has returned no results.  Check your spelling or try again using a different name or category.</h3>
                <BasicSearch onSubmit={ this.props.searchDatabaseSubmit }/>
                <RaisedButton onClick={ this.props.showHomeView }>Home</RaisedButton>
            </div>
        )
    }
}
export default NoResults;
