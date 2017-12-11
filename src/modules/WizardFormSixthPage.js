import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
import validate from './validate';
// import renderField from './renderField';

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
    // console.log(props)
    return (
      <form onSubmit={handleSubmit}>   
        <h3>Racial Defenses</h3>
        <p>Check the box for applicable racial defenses, if any.</p>
        <p>Add number of times the defense may be used to input field.</p>
        <div>
            <label>Resist Charm</label>
            <div>
                <Field
                    name="has_resist_charm"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasResistCharmValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Resist Sleep</label>    
            <div>
                <Field
                    name="has_resist_sleep"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasResistSleepValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Resist Poison</label>
            <div>
                <Field
                    name="has_resist_poison"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasResistPoisonValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Racial Dodge</label>
            <div>
                <Field
                    name="has_racial_dodge"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasRacialDodge && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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