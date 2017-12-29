// component contains basic stats for creature card. Stats generated from required inputs
// except armor, which will render as 0 if entry not present and description.
import React from 'react';

class BasicStats extends React.Component {
    render() {
        let armor;
        let description;
        if (!this.props.stats.armor) {
            armor = 0;
        }
        else {
            armor = this.props.stats.armor;
        };
        if (!this.props.stats.armor) {
            description = "NO DESCRIPTION STORED IN DATABASE."
        }
        else {
            description = this.props.stats.description;
        }
        return (
            <div>
                <h3>Basic Creature Stats</h3>
                <p><span>{this.props.stats.name}</span>  <span>({this.props.stats.level})</span></p>
                <p><span>{this.props.stats.category}</span></p>
                <p><span>Body Points: {this.props.stats.body}</span></p>
                <p><span>Armor Points: {armor}</span></p>
                <p>Physical Description: <span>{description}</span></p>
            </div>
        )
    }
};
export default BasicStats;