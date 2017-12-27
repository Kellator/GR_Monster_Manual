import React from 'react';
import SearchResult from './SearchResult.js';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class SearchResultList extends React.Component {
    render() {
        console.log(this.props);
        const results = (this.props.data) ? this.props.data.map((result, index) => {
            return <SearchResult showCard={ this.props.showCard } key={ index } index={ index } result={ result } />
        }) : undefined;
        return(
            <div>
                <List >
                    { results }
                </List>
                <RaisedButton onClick={ this.props.home } >BACK</RaisedButton>
            </div>
        )
    }
}
export default SearchResultList;