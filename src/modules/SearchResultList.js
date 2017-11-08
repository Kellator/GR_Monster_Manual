import React from 'react';
import SearchResult from './SearchResult.js';
import {List, ListItem} from 'material-ui/List';

class SearchResultList extends React.Component {
    render() {
        console.log(this.props);
        const results = (this.props.resultsList) ? this.props.resultsList.map((result, index) => {
            return <SearchResult key={ index } result={ result } showCardView={ this.props.showCardView }/>
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