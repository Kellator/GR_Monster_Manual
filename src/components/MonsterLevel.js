import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MonsterLevel extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});
    render () {
        return (
            <div>
                <label>Monster Level</label>
                <p>Choose monster level of difficulty (required).</p>
                <div>
                    <SelectField
                        name="monster_level"
                        floatingLabelText="Level"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    
                        <MenuItem value={1} primaryText="Low" />
                        <MenuItem value={2} primaryText="Mid" />
                        <MenuItem value={3} primaryText="High" />
                    </SelectField>
                </div>
            </div>
        )
    }
};