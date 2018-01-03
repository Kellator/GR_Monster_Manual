import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, TextField } from 'redux-form-material-ui';
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
    return (
      <form onSubmit={handleSubmit}>   
        <h3>Physical Defenses</h3>
        <p>Check the box for applicable physical defenses, if any.</p>
        <p>Add number of times the defense may be used to input field.</p>
        <div>
            <label>Parry</label>
            <div>
                <Field
                    name="has_physical_parry"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhysicalParryValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Dodge</label>    
            <div>
                <Field
                    name="has_physical_dodge"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhysicalDodgeValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Bane</label>
            <div>
                <Field
                    name="has_physical_bane"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhysicalBaneValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Phase</label>
            <div>
                <Field
                    name="has_physical_phase"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhysicalPhaseValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Resist</label>
            <div>             
                <Field
                    name="has_physical_resist"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasPhysicalResistValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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
        <div>
            <label>Return Physical</label>
            <div>             
                <Field
                    name="has_return_physical"
                    component={ Checkbox }
                    type="checkbox"
                />
            </div>
        </div>
            {hasReturnPhysicalValue && (
                <div>
                    <p>Enter number of times per day that skill may be used.</p>
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