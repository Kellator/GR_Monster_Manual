import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MonsterSelect extends React.Component {
    state = {
        value: 1,
    };
    handleChange = (event, index, value) => this.setState({value});
    render () {
        return (
            <div>
                <label>Monster Category</label>
                <p>Choose one type of monster (required).</p>
                <div>
                    <SelectField
                        name="monster_category"
                        floatingLabelText="Type"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="Animal" />
                        <MenuItem value={2} primaryText="Elemental" />
                        <MenuItem value={3} primaryText="Fae" />
                        <MenuItem value={4} primaryText="Giant" />
                        <MenuItem value={5} primaryText="Goblinoid" />
                        <MenuItem value={6} primaryText="Human" />
                        <MenuItem value={7} primaryText="Humanoid" />
                        <MenuItem value={8} primaryText="Undead" />
                    </SelectField>
                </div>
            </div>
        )
    }
};