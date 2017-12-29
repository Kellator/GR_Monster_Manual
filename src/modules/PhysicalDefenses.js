import React from 'react';
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
            <div>
                <h3>Physical Defenses</h3>
                {componentToRender}
            </div>
        )
    }
}
export default PhysicalDefenses;