import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
            <Card>
                <CardHeader subtitle={"Physical Defenses"} />
                <CardText>{componentToRender}</CardText>
            </Card>
        )
    }
}
export default PhysicalDefenses;