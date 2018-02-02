import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

class WeaponSkillsModal extends React.Component {
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
        console.log("button was clicked")
      };
    
      render() {
        const actions = [
          <FlatButton
            label="Got it!"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
          />,
        ];
        return(
            <div>
                <FlatButton onClick={this.handleOpen} size="large" label="help"></FlatButton>
                <Dialog
                    title="Weapon Skills"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    style={{color: "rgba(255, 255, 255, 0.75)"}}
                >
                    <div style={{color: "rgba(255, 255, 255, 0.75)"}}>
                        <p>Choose basic weaponskills including body weaponry.</p>
                        <p>Advanced Weaponskills include Slays and Assassinates.  Insert times per day skill may be used.</p>
                    </div>
                </Dialog>
            </div>
        )
    }
}
export default WeaponSkillsModal;