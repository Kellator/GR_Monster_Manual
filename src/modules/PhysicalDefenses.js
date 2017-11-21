import React from 'react';

// class DefenseComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p><span> </span></p>
//             </div>
//         )
//     }
// }

class PhysicalDefenses extends React.Component {
    render() {
        console.log(this.props);
        let stats = this.props.stats;
        let skill;
        let componentToRender;

        const mapStats = Object.keys(stats).map(function(stat) {
            console.log('stats ', stat, ': ' , stats[stat]);
            console.log(stats[stat][`${stat}PerDay`]);
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