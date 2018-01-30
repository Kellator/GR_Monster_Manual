import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Grid from 'material-ui-next/Grid/Grid';

class Notes extends React.Component {
    render() {
        let notes = this.props.notes.toUpperCase();
        return (
            <Grid 
                item
                xs={12} sm={12} md={6} lg={4} xl={4}
                className="stat-div"
            >
                <div className="light-text" style={{marginBottom: '1.5rem'}}>
                    <p className="skill-underline">NOTES OR SPECIAL INSTRUCTIONS</p>
                    {/* <CardHeader subtitle={"Creature Notes or Special Instructions"} /> */}
                    <div><p><span>{ notes }</span></p></div>
                </div>
            </Grid>
        )
    }
}
export default Notes;