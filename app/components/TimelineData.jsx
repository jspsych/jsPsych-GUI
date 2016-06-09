var React = require('react');
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import classnames from 'classnames';

const items = [
  <MenuItem key={1} value={1} primaryText="Animation" />,
  <MenuItem key={2} value={2} primaryText="HTML" />,
  <MenuItem key={3} value={3} primaryText="Single Stimulus" />,
  <MenuItem key={4} value={4} primaryText="Text" />
];

let toggleClass = classnames('toggle-styles');

var TimelineData = React.createClass({
	getInitialState: function() {
		return {
			value: ""
		}
	},
	handleChange : (event, index, value) => this.setState({value}),
	render: function() {
		return (
			<div>
				<div className={toggleClass.block}>
					<Toggle
				      label="Timeline / Trial"
				      defaultToggled={true}
				      className={toggleClass.toggle}
				    />
				</div>
				<div>
					<SelectField
			          value={this.state.value}
			          onChange={this.handleChange}
			          floatingLabelText="Trial Type"
			        >
			          {items}
			        </SelectField>
				</div>
			</div>
		);
	}
});

module.exports = TimelineData;