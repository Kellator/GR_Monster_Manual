import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Notes extends React.Component {
    render() {
        let notes = this.props.notes.toUpperCase();
        return (
            <Card style={{background: 'inherit', marginBottom: '1.5rem'}}>
                <p className="skill-underline">NOTES OR SPECIAL INSTRUCTIONS</p>
                {/* <CardHeader subtitle={"Creature Notes or Special Instructions"} /> */}
                <div><p><span>{ notes }</span></p></div>
            </Card>
        )
    }
}
export default Notes;