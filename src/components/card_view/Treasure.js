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
            <Card style={{background: 'inherit',marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                <p className="skill-underline">TREASURE</p>
                {/* <CardHeader subtitle={"Treasure Options"} /> */}
                <div>{ componentToRender }</div>
            </Card>
        )
    }
}
export default Treasure;