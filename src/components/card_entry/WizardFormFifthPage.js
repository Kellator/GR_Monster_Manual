import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
import InstructionDialog from './instruction_modals/InstructionDialog';
import instructions from '../main/InstructionText';
import validate from './validate';

let WizardFormFifthPage = props => {
    const { 
        handleSubmit, 
        pristine, 
        previousPage, 
        submitting,
        hasBaneMagicValue,
        hasCloakMagicValue,
        hasReflectMagicValue,
        hasPhaseMagicValue,
        hasResistMagicValue,
        hasReturnMagicValue 
    } = props
    let text = instructions.createView.text.five;
    return (
        <Grid item xs={12} sm={8} md={8} lg={6} className="align-center">
            <form onSubmit={handleSubmit} className="card-entry div-opaque-color" id="spell-defenses-entry"  >   
                <h3 className="form-container">Spell Defenses</h3>
                <p>Check the box for applicable spell defenses, if any.</p>
                <p className="form-container">Add number of times the defense may be used to input field.</p>
                <div className="form-container">
                    <div>
                        <Field
                            name="has_bane_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Bane Magic"
                        />
                    </div>
                </div>
                    {hasBaneMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="bane_magic"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                <div className="form-container">   
                    <div>
                        <Field
                            name="has_cloak_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Cloak Magic"
                        />
                    </div>
                </div>
                    {hasCloakMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="cloak_magic"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container" >
                    <div>
                        <Field
                            name="has_reflect_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Reflect Magic"
                        />
                    </div>
                </div>
                    {hasReflectMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="reflect_magic"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_phase_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Phase Magic"
                        />
                    </div>
                </div>
                    {hasPhaseMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="phase_magic"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>             
                        <Field
                            name="has_resist_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Resist Magic"
                        />
                    </div>
                </div>
                    {hasResistMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                name="resist_magic"
                                component={ TextField }
                                type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>             
                        <Field
                            name="has_return_magic"
                            component={ Checkbox }
                            type="checkbox"
                            label="Return Magic"
                        />
                    </div>
                </div>
                    {hasReturnMagicValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                name="return_magic"
                                component={ TextField }
                                type="number"
                                />
                            </div>                       
                        </div>
                    )}
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
  WizardFormFifthPage = reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormFifthPage)

  const selector = formValueSelector('wizard');
  WizardFormFifthPage = connect(state => {
      const hasBaneMagicValue = selector(state, 'has_bane_magic');
      const hasCloakMagicValue = selector(state, 'has_cloak_magic');
      const hasReflectMagicValue = selector(state, 'has_reflect_magic');
      const hasPhaseMagicValue = selector(state, 'has_phase_magic');
      const hasResistMagicValue = selector(state, 'has_resist_magic');
      const hasReturnMagicValue = selector(state, "has_return_magic");
      return {
          hasBaneMagicValue,
          hasCloakMagicValue,
          hasReflectMagicValue,
          hasPhaseMagicValue,
          hasResistMagicValue,
          hasReturnMagicValue
      }
  })(WizardFormFifthPage);
  export default WizardFormFifthPage; 