import React from 'react'

export default class AddTodo extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			addValue: ''
		}
	}

	onChange(e) {
		let value = e.currentTarget.value
		
		this.setState({
			addValue: value
		})
	}

	submit() {
		if (!this.state.addValue) {
			console.log('addValue is empty')
			return
		}
		console.log('AddTodo Component SUBMIT : ' + this.state.addValue)
		// ADD
		this.props.addTodo(this.state.addValue)

		// clear input
		this.setState({
			addValue: ''
		})
	}

	render() {
		return (
			<div>
				<input type='text' onChange={this.onChange.bind(this)} value={this.state.addValue}/>
				<button onClick={this.submit.bind(this)}>Add Todo</button>
			</div>
		)
	}
}