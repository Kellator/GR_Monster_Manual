import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const monster_types = [ 'Animal', 'Elemental', 'Fae', 'Giant', 'Goblinoid', 'Human', 'Humanoid', 'Undead' ];
const monster_levels = [ 'Low', 'Mid', 'High' ];

const renderMonsterTypeSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select a Monster Type...</option>
        {monster_types.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

const renderMonsterLevelSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select a toughness level...</option>
        {monster_levels.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <p>Enter name of new monster (required).</p>
        <Field
            name="monster_name"
            type="text"
            component={renderField}
            label="Monster Name"
        />
        <div>
            <label>Monster Type</label>
            <p>Choose one type of monster (required).</p>
            <div>
                    <Field
                        name="monster_type"
                        component={renderMonsterTypeSelector}
                    />
            </div>
        <div>
            <label>Monster Level</label>
            <p>Choose level of monster (required).</p>
            <div>
                <Field
                    name="monster_level"
                    component={renderMonsterLevelSelector}
                />
            </div>
        </div>
        <p>Enter the body points (required) and armor points for the monster, if applicable.</p>
        <p>Use only numbers.</p>
            <Field
                name="monster_body_points"
                type="number"
                component={renderField}
                label="Body Points"
            />
            <Field
                name="monster_armor_points"
                type="number"
                component={renderField}
                label="Armor Points"
            />
            <p>Enter the physical description of the monster.</p>
            <p>This description should include the visible appearance of the monster.</p>
            <p>Inlcude brief makeup and costuming instructions if applicable.</p>
            <p>Limit of 200 characters.</p>
            <Field
                name="monster_description"
                type="textarea"
                component={renderField}
                label="Physical Description"
                maxLength="200"
            />
        <div>
            <button type="submit" className="next">
            Next
            </button>
        </div>
    </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)