import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, SelectField, TextField } from 'redux-form-material-ui';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import InstructionDialog from './instruction_modals/InstructionDialog';
import validate from './validate';

let WizardFormThirdPage = props => {
    const { 
        handleSubmit, 
        pristine, 
        previousPage, 
        submitting,
        hasAlchemyValue,
        hasMagicValue,
        hasSecondaryMagicValue,
        hasFormalMagicValue,
        hasSecondaryFormalMagicValue 
    } = props
    return (
        <Grid item xs={12} sm={8} md={6} className="align-center" > 
            <form onSubmit={handleSubmit} 
                className="card-entry div-opaque-color" 
                id="scholarly-skills-entry" 
            >
                    <h2>Magic and Scholarly Skills</h2>
                    <p>This section includes innate magically delivered or elementally delivered attacks.</p>
                    <p className="form-container">Use the dropdown menu to choose the type of magic, if applicable.  
                    Then, use the second dropdown menu to choose the column size.</p>
                    <div className="form-container">
                        <div>
                            <Field
                                name="has_alchemy"
                                component={ Checkbox }
                                type="checkbox"
                                label="Alchemy"
                            />
                        </div>
                    </div>
                    {hasAlchemyValue && (
                        <div>
                            <label>Number of Levels</label>
                            <div>
                                <Field 
                                    name="levels_of_alchemy"
                                    component={ TextField }
                                    type="text"
                                />
                            </div>
                        </div>
                    )}
                    <div className="form-container">
                        <div>
                            <Field  
                                name="has_magic"
                                component={ Checkbox }
                                type="checkbox"
                                label="Magic"
                            />
                        </div>
                    </div>
                    {hasMagicValue && (
                        <div>
                            <div>
                                <label>Primary School of Magic</label>
                                <div>
                                    <Field component={SelectField} 
                                        name="primary_school_of_magic" 
                                        label="Primary School of Magic"
                                    > 
                                        <MenuItem value="Celestial"
                                            primaryText="Celestial" label="Celestial" className="light-text"/>
                                        <MenuItem value="Earth" 
                                            primaryText="Earth" label="Earth" className="light-text"/>
                                        <MenuItem value="Harmonic" 
                                            primaryText="Harmonic" label="Harmonic" className="light-text"/>
                                        <MenuItem value="Elemental" 
                                            primaryText="Elemental" label="Elemental" className="light-text"/>
                                        <MenuItem value="Arcane" 
                                            primaryText="Arcane" label="Arcane" className="light-text"/>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <label>Column of Spells</label>
                                <p>Use the dropdown menu to select the column total for the primary school of magic.</p>
                                <div>
                                    <Field component={SelectField} name="primary_column" label="Primary Magic Column" > 
                                        <MenuItem value="Four Column(4)" 
                                            primaryText="Four Column(4)" label="Four Column(4)" 
                                            className="light-text"/>
                                        <MenuItem value="Five Column(5)" 
                                            primaryText="Five Column(5)" label="Five Column(5)" 
                                            className="light-text"/>
                                        <MenuItem value="Six Column(6)" 
                                            primaryText="Six Column(6)" label="Six Column(6)" 
                                            className="light-text"/>
                                        <MenuItem value="Seven Column(7)" 
                                            primaryText="Seven Column(7)" label="Seven Column(7)" 
                                            className="light-text"/>
                                        <MenuItem value="Eight Column(8)" 
                                            primaryText="Eight Column(8)" label="Eight Column(8)" 
                                            className="light-text"/>
                                        <MenuItem value="Nine Column(9)" 
                                            primaryText="Nine Column(9)" label="Nine Column(9)" 
                                            className="light-text"/>
                                        <MenuItem value="Ten Column(10)" 
                                            primaryText="Ten Column(10)" label="Ten Column(10)" 
                                            className="light-text"/>
                                        <MenuItem value="Eleven Column(11)" 
                                            primaryText="Eleven Column(11)" label="Eleven Column(11)" 
                                            className="light-text"/>
                                        <MenuItem value="Twelve Column(12)" 
                                            primaryText="Twelve Column(12)" label="Twelve Column(12)" 
                                            className="light-text"/>
                                        <MenuItem value="See Special Instructions" 
                                            primaryText="See Special Instructions" label="See Special Instructions" 
                                            className="light-text"/>
                                    </Field>
                                </div>
                            </div>
                            <div className="form-container">
                                <div>
                                    <Field  
                                        name="has_secondary_magic"
                                        component={ Checkbox }
                                        type="checkbox"
                                        label="Secondary School"
                                    />
                                </div>
                            </div>
                            {hasSecondaryMagicValue && (
                            <div>
                                <div>
                                    <label>Secondary School of Magic</label>
                                    <div>
                                        <Field component={SelectField} 
                                            name="secondary_school_of_magic" 
                                            label="Secondary School of Magic"
                                        > 
                                            <MenuItem value="Celestial" 
                                                primaryText="Celestial" label="Celestial" className="light-text"/>
                                            <MenuItem value="Earth" 
                                                primaryText="Earth" label="Earth" className="light-text"/>
                                            <MenuItem value="Harmonic"
                                                primaryText="Harmonic" label="Harmonic" className="light-text"/>
                                            <MenuItem value="Elemental" 
                                                primaryText="Elemental" label="Elemental" className="light-text"/>
                                            <MenuItem value="Arcane" 
                                                primaryText="Arcane" label="Arcane" className="light-text"/>
                                        </Field>
                                    </div>
                                </div>
                                <div>
                                    <label>Column of Spells</label>
                                    <p>Use the dropdown menu to select the column total for the secondary school of magic.</p>
                                    <div>
                                        <Field component={SelectField} 
                                            name="secondary_column" 
                                            label="Secondary Magic Column"
                                        > 
                                            <MenuItem value="Four Column(4)" 
                                                primaryText="Four Column(4)" label="Four Column(4)" 
                                                className="light-text"/>
                                            <MenuItem value="Five Column(5)"
                                                primaryText="Five Column(5)" label="Five Column(5)" 
                                                className="light-text"/>
                                            <MenuItem value="Six Column(6)" 
                                                primaryText="Six Column(6)" label="Six Column(6)" 
                                                className="light-text"/>
                                            <MenuItem value="Seven Column(7)" 
                                                primaryText="Seven Column(7)" label="Seven Column(7)" 
                                                className="light-text"/>
                                            <MenuItem value="Eight Column(8)" 
                                                primaryText="Eight Column(8)" label="Eight Column(8)" 
                                                className="light-text"/>
                                            <MenuItem value="Nine Column(9)" 
                                                primaryText="Nine Column(9)" label="Nine Column(9)" 
                                                className="light-text"/>
                                            <MenuItem value="Ten Column(10)" 
                                                primaryText="Ten Column(10)" label="Ten Column(10)" 
                                                className="light-text"/>
                                            <MenuItem value="Eleven Column(11)" 
                                                primaryText="Eleven Column(11)" label="Eleven Column(11)" 
                                                className="light-text"/>
                                            <MenuItem value="Twelve Column(12)" 
                                                primaryText="Twelve Column(12)" label="Twelve Column(12)" 
                                                className="light-text"/>
                                            <MenuItem value="See Special Instructions" 
                                                primaryText="See Special Instructions" label="See Special Instructions" 
                                                className="light-text"/>
                                        </Field>
                                    </div>
                                </div>
                            </div>                        
                            )}
                        </div>
                    )}
                    <div className="form-container">
                        <div>
                            <Field
                                name="has_formal_magic"
                                component={ Checkbox }
                                type="checkbox"
                                label="Formal Magic"
                            />
                        </div>
                    </div>
                    {hasFormalMagicValue && (
                        <div>
                            <div>
                                <label>Primary Formal Magic Levels</label>
                                <div>
                                    <Field 
                                        name="primary_formal_magic_levels"
                                        component={ TextField }
                                        type="text" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="form-container">
                        <div>
                            <Field
                                name="has_secondary_formal_magic"
                                component={ Checkbox }
                                type="checkbox"
                                label="Secondary Formal Magic"
                            />
                        </div>
                    </div>
                    {hasSecondaryFormalMagicValue && (
                        <div>
                            <label>Secondary Formal Magic Levels</label>
                            <div>
                                <Field 
                                    name="secondary_formal_magic_levels"
                                    component={ TextField }
                                    type="text" />
                            </div>
                        </div>
                    )}
                    <div className="form-container">
                        <label>Special Instructions</label>
                        <p>Include any special instructions including columns 
                            larger than 12, pools of elemental or arcane magic, 
                            or any packet delivered formal magics.</p>
                        <div>
                            <Field 
                                name="magic_special"
                                component={ TextField }
                                type="text" />
                        </div>
                    </div>
                    <div >
                        <Grid container justify="space-around">
                            <Grid item xs={6} sm={4} md={3}>
                                <RaisedButton 
                                    type="button" 
                                    className="previous" 
                                    onClick={previousPage}
                                    style={{
                                        borderRadius: "1px",
                                        fontWeight: "bold",
                                        display: "block",
                                        fontSize: "1.5rem"                   
                                    }}
                                >
                                    Previous
                                </RaisedButton>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <RaisedButton 
                                    type="submit" 
                                    className="next"
                                    style={{
                                        borderRadius: "1px",
                                        fontWeight: "bold",
                                        display: "block",
                                        fontSize: "1.5rem"                   
                                    }}
                                >
                                    Next
                                </RaisedButton>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container justify="center" className="align-center" >
                        <Grid item xs={12}>
                            <InstructionDialog />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
  WizardFormThirdPage = reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormThirdPage)

  const selector = formValueSelector('wizard');
  WizardFormThirdPage = connect(state => {
    const hasAlchemyValue = selector(state, 'has_alchemy');
    const hasMagicValue = selector(state, 'has_magic');
    const hasSecondaryMagicValue = selector(state, 'has_secondary_magic');
    const hasFormalMagicValue = selector(state, 'has_formal_magic');
    const hasSecondaryFormalMagicValue = selector(state, 'has_secondary_formal_magic');
    return {
        hasAlchemyValue,
        hasMagicValue,
        hasSecondaryMagicValue,
        hasFormalMagicValue,
        hasSecondaryFormalMagicValue 
    }
  })(WizardFormThirdPage);
  export default WizardFormThirdPage;