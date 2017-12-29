import React from 'react';
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
            <div>
                <h3>Spell Defenses</h3>
                {componentToRender}
            </div>
        )
    }
}
export default SpellDefenses;