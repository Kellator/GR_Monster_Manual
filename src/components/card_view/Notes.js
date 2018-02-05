import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid';

class Notes extends React.Component {
    render() {
        let notes = this.props.notes.toUpperCase();
        return (
            <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                style={{margin: 'auto'}}
                id='notes-container'
                className="stat-container"
            >
                <div className="light-text stat-div" >
                    <p className="skill-underline">NOTES OR SPECIAL INSTRUCTIONS</p>
                    {/* <CardHeader subtitle={"Creature Notes or Special Instructions"} /> */}
                    <div><p><span>{ notes }</span></p></div>
                </div>
            </Grid>
        )
    }
}
export default Notes;