import React from 'react';

class Notes extends React.Component {
    render() {
        console.log(this.props);
        let notes = this.props.notes.toUpperCase();
        return (
            <div>
                <h3>Creature Notes or Special Instructions</h3>
                <p><span>{ notes }</span></p>
            </div>
        )
    }
}
export default Notes;