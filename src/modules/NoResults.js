import React from 'react';
import BasicSearch from './BasicSearch.js';
import RaisedButton from 'material-ui/RaisedButton';

class NoResults extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h3>Sorry!  Your search has returned no results.  Try again using a different name or category.</h3>
                <BasicSearch />
            </div>
        )
    }
}
export default NoResults;
