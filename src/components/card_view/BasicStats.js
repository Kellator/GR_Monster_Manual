// component contains basic stats for creature card. Stats generated from required inputs
// except armor, which will render as 0 if entry not present and description.
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';

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
            <Grid 
                item
                xs={12} sm={12} md={6} lg={4} xl={4}
            >
                <div className="stat-div light-text" style={{marginBottom: '1.5rem', marginTop: '1.5rem'}}>
                    <p className="skill-underline">{this.props.stats.category}</p>
                    <p>Body Points: {this.props.stats.body}</p>
                    <p>Armor Points: {armor}</p>
                    <p>Physical Description: {description}</p>
                </div>
            </Grid>
        )
    }
};
export default BasicStats;