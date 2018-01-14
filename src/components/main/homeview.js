import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicSearch from '../card_search/BasicSearch.js';

// div with search or enter
class HomeView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Search by name or type of creature.</h2>
                    <BasicSearch />
                </div>
                <div>
                    <RaisedButton onClick={ this.props.create } primary={true}>CREATE NEW</RaisedButton>
                </div>
            </div>
        )
    }
};
export default HomeView;