import React from 'react';
import Item from './Item.js';

class Treasure extends React.Component {
    render() {
        let itemList = this.props.treasure;
        // maps over array of treasure items and returns individual component for each item
        let componentToRender = itemList.map(function(item, index){
            return (
                <Item item={item} key={index} />
            )
        })
        return(
            <div>
                <h3>Treasure Options</h3>
                { componentToRender }
            </div>
        )
    }
}
export default Treasure;