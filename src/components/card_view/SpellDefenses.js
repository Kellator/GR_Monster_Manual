import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';
import DefenseComponent from './DefenseComponent.js';

class SpellDefenses extends React.Component {
    render() {
        let stats = this.props.stats;        
        let componentToRender = Object.keys(stats).map(function(stat, index) {
            let times = stats[stat][`${stat}MagicPerDay`];
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
                    <p className="skill-underline">SPELL DEFENSES</p>
                    {/* <CardHeader subtitle={"Spell Defenses"} /> */}
                    <div>
                        {componentToRender}
                    </div>
                </div>
            </Grid>
        )
    }
}
export default SpellDefenses;