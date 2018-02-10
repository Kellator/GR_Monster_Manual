import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
import InstructionDialog from './instruction_modals/InstructionDialog';
import instructions from '../main/InstructionText';
import validate from './validate';

let WizardFormFourthPage = props => {
    const { 
        handleSubmit, 
        pristine, 
        previousPage, 
        submitting,
        hasPhysicalParryValue,
        hasPhysicalDodgeValue,
        hasPhysicalBaneValue,
        hasPhysicalPhaseValue,
        hasPhysicalResistValue,
        hasReturnPhysicalValue 
    } = props
    let text = instructions.createView.text.four;
    return (
        <Grid item xs={12} sm={8} md={8} lg={6} className="align-center">
            <form onSubmit={handleSubmit} className="card-entry div-opaque-color" id="defenses-entry" >   
                <h2 className="form-container">Physical Defenses</h2>
                <p>Check the box for applicable physical defenses, if any.</p>
                <p className="form-container">Add number of times the defense may be used to input field.</p>
                <div className="form-container">
                    <div>
                        <Field
                            name="has_physical_parry"
                            component={ Checkbox }
                            type="checkbox"
                            label="Parry"
                            labelStyle={{float: "none"}}
                        />
                    </div>
                </div>
                    {hasPhysicalParryValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="physical_parry"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                <div className="form-container">   
                    <div>
                        <Field
                            name="has_physical_dodge"
                            component={ Checkbox }
                            type="checkbox"
                            label="Dodge"
                        />
                    </div>
                </div>
                    {hasPhysicalDodgeValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="physical_dodge"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_physical_bane"
                            component={ Checkbox }
                            type="checkbox"
                            label="Bane"
                        />
                    </div>
                </div>
                    {hasPhysicalBaneValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="physical_bane"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_physical_phase"
                            component={ Checkbox }
                            type="checkbox"
                            label="Phase"
                        />
                    </div>
                </div>
                    {hasPhysicalPhaseValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="physical_phase"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>             
                        <Field
                            name="has_physical_resist"
                            component={ Checkbox }
                            type="checkbox"
                            label="Resist"
                        />
                    </div>
                </div>
                    {hasPhysicalResistValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                name="physical_resist"
                                component={ TextField }
                                type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>             
                        <Field
                            name="has_return_physical"
                            component={ Checkbox }
                            type="checkbox"
                            label="Return Physical"
                        />
                    </div>
                </div>
                    {hasReturnPhysicalValue && (
                        <div>
                            {/* <p>Enter number of times per day that skill may be used.</p> */}
                            <label>Times per day</label>
                            <div>
                                <Field
                                name="return_physical"
                                component={ TextField }
                                type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div >
                    <Grid container justify="space-around">
                        <Grid item xs={6} sm={4} md={3}>
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
                        <Grid item xs={6} sm={4} md={3}>
                            <RaisedButton 
                                type="submit" 
                                className="next"
                                style={{
                                    borderRadius: "1px",
                                    fontWeight: "bold",
                                    display: "block",
                                    fontSize: "1.5rem"                   
                                }}
                            >
                                Next
                            </RaisedButton>
                        </Grid>
                    </Grid>
                </div>
                <Grid container justify="center" className="align-center" >
                    <Grid item xs={12} style={{textAlign: "center"}} >
                        <InstructionDialog pageNumber={props.pageNumber} text={text} />
                    </Grid> 
                </Grid>
            </form>
        </Grid>
    )
  }
  WizardFormFourthPage = reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormFourthPage)

  const selector = formValueSelector('wizard');
  WizardFormFourthPage = connect(state => {
      const hasPhysicalParryValue = selector(state, 'has_physical_parry');
      const hasPhysicalDodgeValue = selector(state, 'has_physical_dodge');
      const hasPhysicalBaneValue = selector(state, 'has_physical_bane');
      const hasPhysicalPhaseValue = selector(state, 'has_physical_phase');
      const hasPhysicalResistValue = selector(state, 'has_physical_resist');
      const hasReturnPhysicalValue = selector(state, 'has_return_physical');
      return {
          hasPhysicalParryValue,
          hasPhysicalDodgeValue,
          hasPhysicalBaneValue,
          hasPhysicalPhaseValue,
          hasPhysicalResistValue,
          hasReturnPhysicalValue
      }
  })(WizardFormFourthPage);
  export default WizardFormFourthPage;