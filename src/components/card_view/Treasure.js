import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
            <Card>
                <p className="skill-underline">TREASURE</p>
                {/* <CardHeader subtitle={"Treasure Options"} /> */}
                <CardText>{ componentToRender }</CardText>
            </Card>
        )
    }
}
export default Treasure;