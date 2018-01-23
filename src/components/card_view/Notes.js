import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Notes extends React.Component {
    render() {
        let notes = this.props.notes.toUpperCase();
        return (
            <Card>
                <p className="skill-underline">NOTES OR SPECIAL INSTRUCTIONS</p>
                {/* <CardHeader subtitle={"Creature Notes or Special Instructions"} /> */}
                <CardText><p><span>{ notes }</span></p></CardText>
            </Card>
        )
    }
}
export default Notes;