import React from 'react';
import Redux from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';

const MonsterInput = props => {
    const { handleSubmit, pristine, reset, submitting } = props
        return (
            <Form>
                <div>
                    <p>Input name of monster.  For example: skeleton, pirate, bear.</p>
                    <label>Name</label>
                    <div>
                        <Field
                            name="monster_name"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
            {/* These options are one method of searching in the database. */}
                <div>
                    <p>Choose the type of creature.</p>
                    <label>Type</label>
                    <div>
                        <Field
                            name="monster_type"
                            component="select"
                        >
                        <option >Human</option>
                        <option >Undead</option>
                        <option >Elemental</option>
                        <option >Fae</option>
                        <option >Animal</option>
                        <option >Humanoid</option>
                        <option >Goblinoid</option>
                        <option >Giant</option>
                        </Field>
                    </div>
                </div>

                <div>
                    <p>Enter basic stats for monster.</p>
                    <div>
                        <label>Body Points</label>
                        <div>
                            <Field
                                name="monster_body"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Armor Points</label>
                        <div>
                            <Field
                                name="monster_armor"
                                component="input"
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p>Monster physical description.</p>
                    <label>Visual Appearance</label>
                    <div>
                        <Field
                            name="monster_description"
                            component="textarea"
                        />
                    </div>
                </div>

                <div>
                    <p>Choose skills for Monster.  Be sure to include number of times skill may be used if applicable.</p>
                    <label>Skills</label>
                    <div>
                        <label htmlFor="monster_abilities_weapons">Monster Weapon Skills</label>
                        <fieldset
                            name="monster_abilities_weapons"
                            component="select"
                        >
                        <ul>
                            <li><Field 
                            name="ma_one_weapon"
                            component="input"
                            type="checkbox"/>One Handed Weapon</li>
                            <li><Field 
                            name="ma_two_weapons"
                            component="input"
                            type="checkbox"/>Two Weapons</li>
                            <li><Field 
                            name="ma_two_handed_weapon"
                            component="input"
                            type="checkbox"/>Two Handed Weapon</li>
                            <li><Field 
                            name="ma_shield"
                            component="input"
                            type="checkbox"/>Shield</li>
                        </ul>
                        </fieldset>
                    </div>
                </div>

                <div>
                    <p>Input Monster Defense.  Be sure to include number of times defenses may be used.</p>
                    <label>Defenses</label>
                    <div>
                        <Field
                            name="monster_defenses"
                            component="select"
                        >
                        {/* each skill clicked needs to open a secondary input for number of skills */}
                        <option >Dodge</option>
                        <option >Phase</option>
                        <option >Reflect</option>
                        <option >Resist</option>
                        <option >Bane</option>
                        <option >Threshold</option>  
                        </Field>                      
                    </div>
                </div>

                <div>
                    <p>Describe any special/specific abilities, disadvantages etc.  For example: reduced damage from normal weapons.</p>
                    <label>Other</label>
                    <div>
                        <Field
                            name="monster_specifics"
                            component="textarea"
                            maxLength="120"
                            
                        />
                    </div>
                </div>
{/* treasure needs to have number input on click for amount of each type */}
                <div>
                    <p>Input typical type and amount of treasure carried by Monster.</p>
                    <label>Treasure</label>
                    <div>
                        <Field
                            name="monster_loot"
                            component="select"
                        >
                        <option >Silver</option>
                        <option >Gold</option>
                        <option >Platinum</option>
                        <option >Components</option>
                        <option >Production Items</option>

                        {/* Magic item needs text input for additional detail */}
                        <option >Magic Item</option>
                        </Field>
                    </div>
                </div>

                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </Form>
        )
    }
export default reduxForm({
    form: 'monster_input'
})(MonsterInput);