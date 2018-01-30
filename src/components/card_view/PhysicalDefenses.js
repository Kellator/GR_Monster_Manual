import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';
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
                xs={12} sm={12} md={6} lg={4} xl={4}
                className="stat-div"
                style={{margin: '10px'}}
            >
                <div className="light-text" >
                    <p className="skill-underline">PHYSICAL DEFENSES</p>
                    {/* <CardHeader subtitle={"Physical Defenses"} /> */}
                    <div>{componentToRender}</div>
                </div>
            </Grid>
        )
    }
}
export default PhysicalDefenses;