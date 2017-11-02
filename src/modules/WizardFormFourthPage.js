import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox } from 'redux-form-material-ui';
import validate from './validate';
// import renderField from './renderField';

const WizardFormFourthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    console.log(props)
    return (
      <form onSubmit={handleSubmit}>
        <div>            
            <label>Physical Defenses</label>
            <p>Check the box for applicable physical defenses, if any.</p>
            <p>Add number of times the defense may be used to input field.</p>
            <div>
                <label>
                    <Field
                    name="physical_parry"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Parry
                </label>
                <label>
                    <Field
                    name="physical_dodge"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Dodge
                </label>
                <label>
                    <Field
                    name="physical_bane"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Bane Physical
                </label>
                <label>
                    <Field
                    name="physical_phase"
                    component={ Checkbox }
                    type="checkbox"
                    />
                    {' '}
                    Phase Physical
                </label>
                <label>
                    <Field
                    name="physical_resist"
                    component={ Checkbox }
                    type="checkbox"
                    />
                    {' '}
                    Resist Physical
                </label>
                <label>
                    <Field
                    name="physical_threshold"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Physical Threshold
                </label>
            </div>
            <div>
            <RaisedButton type="button" className="previous" onClick={previousPage}>
                Previous
            </RaisedButton>
            <RaisedButton type="submit" className="next">
                Next
            </RaisedButton>
            </div>
        </div>
      </form>
    )
  }
  export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormFourthPage)