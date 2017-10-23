import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import RaisedButton from 'material-ui/RaisedButton';
// import SelectField from 'material-ui/SelectField';
import MonsterSelect from './MonsterSelect.js';
import MonsterLevel from './MonsterLevel.js';

import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle,
    DatePicker
} from 'redux-form-material-ui';

// const monster_types = [ 'Animal', 'Elemental', 'Fae', 'Giant', 'Goblinoid', 'Human', 'Humanoid', 'Undead' ];
// const monster_levels = [ 'Low', 'Mid', 'High' ];

// const renderMonsterTypeSelector = ({ input, meta: { touched, error } }) => (
//     <div>
//       <select {...input}>
//         <option value="">Select a Monster Type...</option>
//         {monster_types.map(val => (
//           <option value={val} key={val}>
//             {val}
//           </option>
//         ))}
//       </select>
//       {touched && error && <span>{error}</span>}
//     </div>
//   )

// const renderMonsterLevelSelector = ({ input, meta: { touched, error } }) => (
//     <div>
//       <select {...input}>
//         <option value="">Select a toughness level...</option>
//         {monster_levels.map(val => (
//           <option value={val} key={val}>
//             {val}
//           </option>
//         ))}
//       </select>
//       {touched && error && <span>{error}</span>}
//     </div>
//   )


const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <p>Enter name of new monster (required).</p>
        <TextField
            name="monster_name"
            type="text"
            component={renderField}
            label="Monster Name"
        />
        <MonsterSelect />
        <MonsterLevel />
            {/* <label>Monster Level</label>
            <p>Choose level of monster (required).</p>
            <div>
                <SelectField
                    name="monster_level"
                    component={renderMonsterLevelSelector}
                />
            </div> */}
        <p>Enter the body points (required) and armor points for the monster, if applicable.</p>
        <p>Use only numbers.</p>
            <label>
            Body Points {' '}
            <TextField
                name="monster_body_points"
                type="number"
                component={renderField}
                >
            </TextField>
            </label><br/>
            <label>
                Armor Points {' '}
            <TextField
                name="monster_armor_points"
                type="number"
                component={renderField}
                label="Armor Points"
            />           
            </label>
            <p>Enter the physical description of the monster.</p>
            <p>This description should include the visible appearance of the monster.</p>
            <p>Inlcude brief makeup and costuming instructions if applicable.</p>
            <p>Limit of 200 characters.</p>
            <TextField
                name="monster_description"
                type="textarea"
                component={renderField}
                label="Physical Description"
                maxLength="200"
            />
        <div>
            <RaisedButton type="submit" className="next">
            Next
            </RaisedButton>
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