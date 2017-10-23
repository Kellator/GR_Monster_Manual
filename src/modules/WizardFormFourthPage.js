import React from 'react'
import { Field, reduxForm } from 'redux-form';
import validate from './validate'
import renderField from './renderField'

const WizardFormFourthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
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
                    component="input"
                    type="checkbox"
                    />{' '}
                    Parry
                </label>
                <label>
                    <Field
                    name="physical_dodge"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Dodge
                </label>
                <label>
                    <Field
                    name="physical_bane"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Bane Physical
                </label>
                <label>
                    <Field
                    name="physical_phase"
                    component="input"
                    type="checkbox"
                    />
                    {' '}
                    Phase Physical
                </label>
                <label>
                    <Field
                    name="physical_resist"
                    component="input"
                    type="checkbox"
                    />
                    {' '}
                    Resist Physical
                </label>
                <label>
                    <Field
                    name="physical_threshold"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Physical Threshold
                </label>
            </div>
            <label>Spell Defenses</label>
            <p>Check the box for applicable spell defenses, if any.</p>
            <p>Add number of times the defense may be used to input field.</p>
            <div>
                <label>
                    <Field
                    name="magic_bane"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Bane
                </label>
                <label>
                    <Field
                    name="magic_cloak"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Cloak
                </label>
                <label>
                    <Field
                    name="magic_reflect"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Reflect
                </label>
                <label>
                    <Field
                    name="magic_phase"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Phase
                </label>
                <label>
                    <Field
                    name="magic_resist"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Resist
                </label>
            </div>

            <label>Racial Defenses</label>
            <p>Check the box for applicable Racial defenses, if any.</p>
            <p>Add number of times the defense may be used to input field.</p>
            <div>
                <label>
                    <Field
                    name="racial_resist_charm"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Resist Charm
                </label>
                <label>
                    <Field
                    name="racial_resist_sleep"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Resist Sleep
                </label>
                <label>
                    <Field
                    name="racial_resist_poison"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Resist Poison
                </label>
                <label>
                    <Field
                    name="racial_dodge"
                    component="input"
                    type="checkbox"
                    />{' '}
                    Dodge
                </label>
            </div>

            <div>
            <button type="button" className="previous" onClick={previousPage}>
                Previous
            </button>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
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