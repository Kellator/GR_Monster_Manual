import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
            <Card style={{background: 'inherit', marginBottom: '1.5rem'}}>
                <p className="skill-underline">SPELL DEFENSES</p>
                {/* <CardHeader subtitle={"Spell Defenses"} /> */}
                <div>
                    {componentToRender}
                </div>
            </Card>
        )
    }
}
export default SpellDefenses;