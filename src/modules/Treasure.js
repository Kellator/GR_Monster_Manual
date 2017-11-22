import React from 'react';
import Item from './Item.js';

class Treasure extends React.Component {
    render() {
        console.log(this.props);
        let itemList = this.props.stats;
        console.log(itemList);
        let componentToRender = itemList.map(function(item, index){
            console.log(item);
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