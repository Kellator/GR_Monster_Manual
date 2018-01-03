import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Checkbox, SelectField, TextField } from 'redux-form-material-ui';


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
      <form onSubmit={handleSubmit}>
        <div>
            <label>Magic and Scholarly Skills</label>
            <p>This section includes innate magically delivered or elementally delivered attacks.</p>
            <p>Use the dropdown menu to choose the type of magic, if applicable.  Then, use the second dropdown menu to choose the column size.</p>
{/* add checkbox input for if monster has scholarly skills - hide other inputs until checkbox checked. */}
            <div>
                <label>Alchemy</label>
                <div>
                    <Field
                        name="has_alchemy"
                        component={ Checkbox }
                        type="checkbox"
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
            <div>
                <label>Magic</label>
                <div>
                    <Field  
                        name="has_magic"
                        component={ Checkbox }
                        type="checkbox"
                    />
                </div>
            </div>
            {hasMagicValue && (
                <div>
                    <div>
                        <label>Primary School of Magic</label>
                        <div>
                            <Field
                                name="primary_school_of_magic"
                                component={ SelectField }
                                type="selectfield">
                                    <MenuItem value={"Celestial"} primaryText="Celestial" />
                                    <MenuItem value={"Earth"} primaryText="Earth" />
                                    <MenuItem value={"Harmonic"} primaryText="Harmonic" />
                                    <MenuItem value={"Elemental"} primaryText="Elemental" />
                                    <MenuItem value={"Arcane"} primaryText="Arcane" />
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label>Column of Spells</label>
                        <p>Use the dropdown menu to select the column total for the primary school of magic.</p>
                        <div>
                            <Field  
                                name="primary_column"
                                component={ SelectField }
                                type="selectfield">
                                <MenuItem value={"Four Column(4)"} primaryText="Four Column(4)" />
                                <MenuItem value={"Five Column(5)"} primaryText="Five Column(5)" />
                                <MenuItem value={"Six Column(6)"} primaryText="Six Column(6)" />
                                <MenuItem value={"Seven Column(7)"} primaryText="Seven Column(7)" />
                                <MenuItem value={"Eight Column(8)"} primaryText="Eight Column(8)" />
                                <MenuItem value={"Nine Column(9)"} primaryText="Nine Column(9)" />
                                <MenuItem value={"Ten Column(10)"} primaryText="Ten Column(10)" />
                                <MenuItem value={"Eleven Column(11)"} primaryText="Eleven Column(11)" />
                                <MenuItem value={"Twelve Column(12)"} primaryText="Twelve Column(12)" />
                                <MenuItem value={"See Special Text"} primaryText="See Special Text" />    
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label>Secondary Magic</label>
                        <div>
                            <Field  
                                name="has_secondary_magic"
                                component={ Checkbox }
                                type="checkbox"
                            />
                        </div>
                    </div>
                    {hasSecondaryMagicValue && (
                    <div>
                        <div>
                            <label>Secondary School of Magic</label>
                            <div>
                                <Field
                                    name="secondary_school_of_magic"
                                    component={ SelectField }
                                    type="selectfield">
                                        <MenuItem value={"Celestial"} primaryText="Celestial" />
                                        <MenuItem value={"Earth"} primaryText="Earth" />
                                        <MenuItem value={"Harmonic"} primaryText="Harmonic" />
                                        <MenuItem value={"Elemental"} primaryText="Elemental" />
                                        <MenuItem value={"Arcane"} primaryText="Arcane" />
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label>Column of Spells</label>
                            <p>Use the dropdown menu to select the column total for the secondary school of magic.</p>
                            <div>
                                <Field  
                                    name="secondary_column"
                                    component={ SelectField }
                                    type="selectfield">
                                    <MenuItem value={"Four Column(4)"} primaryText="Four Column(4)" />
                                    <MenuItem value={"Five Column(5)"} primaryText="Five Column(5)" />
                                    <MenuItem value={"Six Column(6)"} primaryText="Six Column(6)" />
                                    <MenuItem value={"Seven Column(7)"} primaryText="Seven Column(7)" />
                                    <MenuItem value={"Eight Column(8)"} primaryText="Eight Column(8)" />
                                    <MenuItem value={"Nine Column(9)"} primaryText="Nine Column(9)" />
                                    <MenuItem value={"Ten Column(10)"} primaryText="Ten Column(10)" />
                                    <MenuItem value={"Eleven Column(11)"} primaryText="Eleven Column(11)" />
                                    <MenuItem value={"Twelve Column(12)"} primaryText="Twelve Column(12)" />
                                    <MenuItem value={"See Special Text"} primaryText="See Special Text" />    
                                </Field>
                            </div>
                        </div>
                    </div>                        
                    )}
                </div>
            )}
            <div>
                <label>Formal Magic</label>
                <div>
                    <Field
                        name="has_formal_magic"
                        component={ Checkbox }
                        type="checkbox"
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
            <div>
                <label>Secondary Formal Magic</label>
                <div>
                    <Field
                        name="has_secondary_formal_magic"
                        component={ Checkbox }
                        type="checkbox"
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
            <div>
                <label>Special Instructions</label>
                <p>Include any special instructions including columns larger than 12, pools of elemental or arcane magic, 
                    or any packet delivered formal magics.</p>
                <div>
                    <Field 
                        name="magic_special"
                        component={ TextField }
                        type="text" />
                </div>
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