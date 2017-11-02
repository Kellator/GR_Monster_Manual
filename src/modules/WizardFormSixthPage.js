import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox } from 'redux-form-material-ui';
import validate from './validate';
// import renderField from './renderField';

const WizardFormSixthPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    console.log(props)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Racial Defenses</label>
                <p>Check the box for applicable Racial defenses, if any.</p>
                <p>Add number of times the defense may be used to input field.</p>
                <div>
                    <label>
                        <Field
                        name="racial_resist_charm"
                        component={ Checkbox }
                        type="checkbox"
                        />{' '}
                        Resist Charm
                    </label>
                    <label>
                        <Field
                        name="racial_resist_sleep"
                        component={ Checkbox }
                        type="checkbox"
                        />{' '}
                        Resist Sleep
                    </label>
                    <label>
                        <Field
                        name="racial_resist_poison"
                        component={ Checkbox }
                        type="checkbox"
                        />{' '}
                        Resist Poison
                    </label>
                    <label>
                        <Field
                        name="racial_dodge"
                        component={ Checkbox }
                        type="checkbox"
                        />{' '}
                        Dodge
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
  })(WizardFormSixthPage)