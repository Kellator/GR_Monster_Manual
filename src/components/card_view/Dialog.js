import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DeleteDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  deleteApprove = () => {
    console.log(this.props);
      this.props.deleteCard(this.props.id);
      this.props.returnNewList(this.props.data, this.props.id);
      this.handleClose();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
        style={{color: 'white', letterSpacing: '2px'}}
      />,
      <FlatButton
        label="Delete"
        onClick={this.deleteApprove}
        
      />,
    ];

    return (
      <div  >
        <RaisedButton 
          label="Delete" 
          onClick={this.handleOpen}            
          // fullWidth='true'        
        />
        <Dialog
          title="Delete Creature Card"
          actions={actions}
          modal={true}
          open={this.state.open}        
          className="light-text"
        >
          <h1 className="red-text">WARNING:  Are you sure you want to delete this creature card?  This action cannot be undone.</h1>
        </Dialog>
      </div>
    );
  }
};