import React from 'react';
import DefenseComponent from './DefenseComponent.js';

class SpellDefenses extends React.Component {
    render() {
        console.log(this.props);
        let stats = this.props.stats;
        
        let componentToRender = Object.keys(stats).map(function(stat, index) {
            console.log('stats ', stat, ': ' , stats[stat]);
            console.log(stats[stat][`${stat}MagicPerDay`]);
            let times = stats[stat][`${stat}MagicPerDay`];
            return (
                <DefenseComponent stat={stat} times={times} key={index} />
            )

        });
        return(
            <div>
                <h3>Spell Defenses</h3>
                {componentToRender}
            </div>
        )
    }
}
export default SpellDefenses;