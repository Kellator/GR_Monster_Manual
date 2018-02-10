import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
import InstructionDialog from './instruction_modals/InstructionDialog';
import validate from './validate';


let WizardFormSixthPage = props => {
    const { 
        handleSubmit, 
        pristine, 
        previousPage, 
        submitting,
        hasResistCharmValue,
        hasResistSleepValue,
        hasResistPoisonValue,
        hasRacialDodge,
    } = props
    return (
        <Grid item xs={12} sm={8} md={6} className="align-center" > 
            <form onSubmit={handleSubmit}
                className="card-entry div-opaque-color" 
                id="racial-defense-entry"
            >   
                <h3>Racial Defenses</h3>
                <p>Check the box for applicable racial defenses, if any.</p>
                <p className="form-container">Add number of times the defense may be used to input field.</p>
                <div className="form-container">
                    <div>
                        <Field
                            name="has_resist_charm"
                            component={ Checkbox }
                            type="checkbox"
                            label="Resist Charm"
                        />
                    </div>
                </div>
                    {hasResistCharmValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="resist_charm"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_resist_sleep"
                            component={ Checkbox }
                            type="checkbox"
                            label="Resist Sleep"
                        />
                    </div>
                </div>
                    {hasResistSleepValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="resist_sleep"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_resist_poison"
                            component={ Checkbox }
                            type="checkbox"
                            label="Resist Poison"
                        />
                    </div>
                </div>
                    {hasResistPoisonValue && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="resist_poison"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
                <div className="form-container">
                    <div>
                        <Field
                            name="has_racial_dodge"
                            component={ Checkbox }
                            type="checkbox"
                            label="Racial Dodge"
                        />
                    </div>
                </div>
                    {hasRacialDodge && (
                        <div>
                            <label>Times per day</label>
                            <div>
                                <Field
                                    name="racial_dodge"
                                    component={ TextField }
                                    type="number"
                                />
                            </div>                       
                        </div>
                    )}
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
                
                    <Grid container justify="center" className="align-center" >
                        <Grid item xs={12} style={{textAlign: "center"}} >
                            <InstructionDialog pageNumber={props.pageNumber}  />
                        </Grid> 
                    </Grid>
            </form>
        </Grid>
    )
  }
  WizardFormSixthPage = reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormSixthPage)

  const selector = formValueSelector('wizard');
  WizardFormSixthPage = connect(state => {
      const hasResistCharmValue = selector(state, 'has_resist_charm');
      const hasResistSleepValue = selector(state, 'has_resist_sleep');
      const hasResistPoisonValue = selector(state, 'has_resist_poison');
      const hasRacialDodge = selector(state, 'has_racial_dodge');

      return {
          hasResistCharmValue,
          hasResistSleepValue,
          hasResistPoisonValue,
          hasRacialDodge,
      }
  })(WizardFormSixthPage);
  export default WizardFormSixthPage;