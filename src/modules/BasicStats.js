import React from 'react';

class BasicStats extends React.Component {
    render() {
        console.log(this.props);
        let armor;
        if (!this.props.stats.armor) {
            armor = 0;
        }
        else {
            armor = this.props.stats.armor;
        }
        return (
            <div>
                <p><span>{this.props.stats.name}</span>  <span>({this.props.stats.level})</span></p>
                <p><span>{this.props.stats.category}</span></p>
                <p><span>Body Points: {this.props.stats.body}</span></p>
                <p><span>Armor Points: {armor}</span></p>
            </div>
        )
    }
}
export default BasicStats;