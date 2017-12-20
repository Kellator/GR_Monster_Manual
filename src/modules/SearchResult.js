import React from 'react';
import {List, ListItem} from 'material-ui/List';

class SearchResult extends React.Component {
    render() {
        console.log(this.props)
        let monster = this.props.result;
        let name = monster.name;
        let level = monster.level;
        let category = monster.category; 
        let func = () => {
            this.props.showCardView(monster);
        }
        return (
            <div>
                <ListItem onClick={ func } 
                        primaryText={ name + " (" + level + ")"}
                        secondaryText={ category }
                />
            </div>
        )
    }
}
export default SearchResult;