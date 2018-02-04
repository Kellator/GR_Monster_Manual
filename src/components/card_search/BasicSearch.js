import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import Grid from 'material-ui-next/Grid';
// import Tooltip from 'material-ui-next/Tooltip';
import { Field, reduxForm } from 'redux-form';
import {searchDatabase} from '../../redux/actions/DatabaseActions';
let hintText;
class BasicSearch extends React.Component {
    submit = (value, dispatch) => {
        dispatch(searchDatabase(value));
        console.log(value);  
    };
    render() {
        const {handleSubmit, pristine, reset, submitting } = this.props
        return (
            <Grid item      
            style={{paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'}}>
                <form onSubmit={ handleSubmit(this.submit.bind(this)) } >
                    <div>
                        <Field 
                            placeholder="search" 
                            name="basic_search_input" 
                            component={ TextField }
                            initialvalue=' '
                            style={{
                                width: '100%'
                            }}
                        />
                        <Field
                            name="basic_search_input"
                            id="category_search" 
                            hintText="Creature Type"
                            component={SelectField}
                        >
                            <MenuItem value="Animal" primaryText="Animal" className="light-text" /> 
                            <MenuItem value="Elemental" primaryText="Elemental" className="light-text" />
                            <MenuItem value="Fae" primaryText="Fae" className="light-text" />
                            <MenuItem value="Giant" primaryText="Giant" className="light-text" />
                            <MenuItem value="Goblinoid" primaryText="Goblinoid" className="light-text" />                   
                            <MenuItem value="Human" primaryText="Human" className="light-text" />
                            <MenuItem value="Humanoid" primaryText="Humanoid" className="light-text" />
                            <MenuItem value="Magical Creature" primaryText="Magical Creature" className="light-text" />
                            <MenuItem value="Undead" primaryText="Undead" className="light-text" />
                        </Field>
                        <RaisedButton 
                            type="submit" 
                            className="button-main"                            
                            style={{
                                borderRadius: '1px',
                                padding: '10px, 24px',
                                fontWeight: 'bold',
                                width: '100%',
                                marginTop: '2rem'
                            }}
                        >Submit</RaisedButton>
                    </div>
                </form>
            </Grid>
        )
    }
}
export default reduxForm({
    form: 'basicSearch'
})(BasicSearch);