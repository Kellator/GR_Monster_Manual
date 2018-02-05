import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';
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
            <Grid 
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                style={{margin: "auto"}}
                id="treaure-container"
                className="stat-container"
            >
                <div className="light-text stat-div">
                    <p className="skill-underline">TREASURE</p>
                    <div>{ componentToRender }</div>
                </div>
            </Grid>
        )
    }
}
export default Treasure;