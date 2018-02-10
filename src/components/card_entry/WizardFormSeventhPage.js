import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from 'material-ui-next/Grid';
import  RaisedButton  from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import InstructionDialog from './instruction_modals/InstructionDialog';
import validate from './validate';

const WizardFormSeventhPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
      <Grid item xs={12} sm={8} md={8} lg={6} className="align-center">
        <form onSubmit={handleSubmit} className="form-container card-entry div-opaque-color">
          <p>Enter standard treasure distribution amount.</p>
            <Field 
            name="standard_treasure"
            component={TextField}
            label="Standard Treasure" 
            className="form-container"
            />
          <p>Enter any special instruction specific to creature.</p>
            <Field 
            name="special_instructions"
            component={TextField}
            label="Special Instructions" 
            className="form-container"
            />
          <div className="form-container">
            <Grid container justify="space-around" >
              <Grid item xs={6} sm={4} md={3} >
                <RaisedButton 
                  type="button" 
                  className="previous" 
                  onClick={previousPage}
                  style={{
                    borderRadius: "1px",
                    fontWeight: "bold",
                    display: "block",
                    fontSize: "1.5rem"                   
                }}
                >
                  Previous
                </RaisedButton>
              </Grid>
              <Grid item xs={6} sm={4} md={3} >
                <RaisedButton 
                  type="submit" 
                  disabled={pristine || submitting}
                  style={{
                    borderRadius: "1px",
                    fontWeight: "bold",
                    display: "block",
                    fontSize: "1.5rem"                   
                }}
                >
                  Submit
                </RaisedButton>
              </Grid>
            </Grid>
          </div>
            <Grid container justify="center" className="align-center" >
                <Grid item xs={12}>
                    <InstructionDialog />
                </Grid>
            </Grid>
        </form>
      </Grid>
    )
  }
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSeventhPage)