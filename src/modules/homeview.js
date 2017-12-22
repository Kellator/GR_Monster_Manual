import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicSearch from './BasicSearch.js';
import * as actions from '../redux/actions/index';

// div with search or enter
class HomeView extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <h2>Search by name or type of creature.</h2>
                    <BasicSearch />
                </div>
                <div>
                    <RaisedButton onClick={ this.props.create }>Create New</RaisedButton>
                </div>
            </div>
        )
    }
}
export default HomeView;