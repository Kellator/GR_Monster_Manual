import React from 'react';
import SearchResult from './SearchResult.js';
import {List, ListItem} from 'material-ui/List';

class SearchResultList extends React.Component {
    render() {
        console.log(this.props);
        const results = (this.props.data) ? this.props.data.map((result, index) => {
            return <SearchResult showCard={ this.props.showCard } key={ index } result={ result } />
        }) : undefined;
        return(
            <div>
                <List >
                    { results }
                </List>
            </div>
        )
    }
}
export default SearchResultList;