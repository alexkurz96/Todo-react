import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		// const inp = e.target.querySelector('[name=label]');
		// console.log(inp.value.trim);
		
		// if (inp.value.trim() == '') return;
		// this.props.onItemAdded(inp.value);
		// inp.value = '';
		if (this.state.label.trim() === '') return;
		this.props.onItemAdded(this.state.label);
		this.setState({
			label: ''
		});
	}

	render() {
		return (
			<form 
				className="item-add-form" 
				onSubmit={this.onSubmit}
			>
				<input type="text"
					name="label"
					className="form-control add-input"
					placeholder="Add" 
					onChange={this.onLabelChange}
					value={this.state.label}
					/>
				<button type="submit" className="btn btn-info">Add Item</button>
			</form>
		);
	}
}