import React from 'react';
import { SelectField } from 'redux-form-material-ui';
// import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Grid from 'material-ui-next/Grid';
import { Field, reduxForm } from 'redux-form';
import {searchDatabase} from '../../redux/actions/DatabaseActions';

class CategorySearch extends React.Component {
    // handleChangeField = (values, dispatch) => {
    //     // this.dispatch(searchDatabase(values))
    //     console.log(values)
    // }
    // state = {
    //     value: null
    // }
    // handleChange = (event, index, value) => {
    //     this.setState({value});
    //     console.log({value})
        
    // }
    render() {
        console.log(this.props)
        return(
            <div>
                <form>
                    <Field
                        name="category_search"
                        id="category_search" 
                        hintText="Creature Type"
                        // value={this.state.value}
                        onChange={console.log(this.props)}
                        component={SelectField}
                        onSubmit={console.log("super sick of this shit")}
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
                </form>
            </div>
        )
    }
}

CategorySearch = reduxForm({
    form: 'categorySearch'
})(CategorySearch);

export default CategorySearch;