import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

class InstructionDialog extends React.Component {
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
            // primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
            labelStyle={{fontSize:"1.2rem", textAlign: "center", fontWeight: "boldest"}}
          />,
        ];
        return(
            <div>
                <FlatButton 
                    onClick={this.handleOpen} 
                    size="large" 
                    label="What do I do here?" 
                    id="instruction-dialog" 
                    style={{color: "#AA0004"}}
                    
                    labelStyle={{fontSize:"1.2rem", textAlign: "center"}}
                ></FlatButton>
                <Dialog
                    title="Weapon Skills"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    style={{color: "rgba(255, 255, 255, 0.75)"}}
                    
                >
                    <div style={{color: "rgba(255, 255, 255, 0.75)"}}>
                        <p>This section allows you to select basic and advanced weapon skills.
                            Basic Weapon skills are the type of weapon a creature uses including body weaponry like claws.
                        </p>
                        <p>Advanced Weaponskills include Slays and Assassinates.
                            Click the box for the selected skill and then enter times per day skill may be used.</p>
                    </div>
                </Dialog>
            </div>
        )
    }
}
export default InstructionDialog;