import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox } from 'redux-form-material-ui';
import validate from './validate';
// import renderField from './renderField';

const WizardFormFifthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    console.log(props)
    return (
      <form onSubmit={handleSubmit}>
        <div>            
            <label>Spell Defenses</label>
            <p>Check the box for applicable spell defenses, if any.</p>
            <p>Add number of times the defense may be used to input field.</p>
            <div>
                <label>
                    <Field
                    name="magic_bane"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Bane
                </label>
                <label>
                    <Field
                    name="magic_cloak"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Cloak
                </label>
                <label>
                    <Field
                    name="magic_reflect"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Reflect
                </label>
                <label>
                    <Field
                    name="magic_phase"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Phase
                </label>
                <label>
                    <Field
                    name="magic_resist"
                    component={ Checkbox }
                    type="checkbox"
                    />{' '}
                    Resist
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
  })(WizardFormFifthPage)