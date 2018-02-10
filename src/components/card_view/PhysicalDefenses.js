import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid';
import DefenseComponent from './DefenseComponent.js';

class PhysicalDefenses extends React.Component {
    render() {
        let stats = this.props.stats;       
        let componentToRender = Object.keys(stats).map(function(stat, index) {
            let times = stats[stat][`${stat}PerDay`];
            return (
                <DefenseComponent stat={stat} times={times} key={index} />
            )

        });
        return(
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                style={{margin: "auto"}}
                id="phys-def-container"
                className="stat-container"
            >
                <div className="light-text stat-div" >
                    <p className="skill-underline">PHYSICAL DEFENSES</p>
                    <div>{componentToRender}</div>
                </div>
            </Grid>
        )
    }
}
export default PhysicalDefenses;