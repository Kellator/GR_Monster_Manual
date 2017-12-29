import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// map state to props to display card name in <p>
class CardCreated extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>New Monster Card added to the database.</h1>
                <p>You have added a new card to the database.</p>
                <p>More cards to add?  Click the button below to add additional cards.</p>
                <RaisedButton onClick={ this.props.createSubmit }>Add Another Card</RaisedButton>
                <p>Finished entering cards?  Click the button below to return to the main page.</p>
                <RaisedButton onClick={ this.props.showHomeView }>Home</RaisedButton>
            </div>
        )
    }
}
export default CardCreated;