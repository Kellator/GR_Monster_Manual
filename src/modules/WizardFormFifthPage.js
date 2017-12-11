import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
import validate from './validate';
// import renderField from './renderField';

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
    // console.log(props)
    return (
      <form onSubmit={handleSubmit}>   
        <h3>Spell Defenses</h3>
        <p>Check the box for applicable spell defenses, if any.</p>
        <p>Add number of times the defense may be used to input field.</p>
        <div>
            <label>Bane Magic</label>
            <div>
                <Field
                    name="has_bane_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasBaneMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Cloak Magic</label>    
            <div>
                <Field
                    name="has_cloak_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasCloakMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Reflect Magic</label>
            <div>
                <Field
                    name="has_reflect_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasReflectMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Phase Magic</label>
            <div>
                <Field
                    name="has_phase_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhaseMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Resist Magic</label>
            <div>             
                <Field
                    name="has_resist_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasResistMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Return Magic</label>
            <div>             
                <Field
                    name="has_return_magic"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasReturnMagicValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <RaisedButton type="button" className="previous" onClick={previousPage}>
                Previous
            </RaisedButton>
            <RaisedButton type="submit" className="next">
                Next
            </RaisedButton>
        </div>
      </form>
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