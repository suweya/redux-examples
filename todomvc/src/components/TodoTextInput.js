import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {

	// 构造函数
	constructor(props, context) {
		super(props, context)
		// 设置文本框的值
		this.state = {
			text: this.props.text || ''
		}
	}

	handleSubmit(e) {
		const text = e.target.value.trim()
		if (e.which === 13) {
			this.props.onSave(text)
			if (this.props.newTodo) {
				this.setState({
					text: ''
				})
			}
		}
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	handleBlur(e) {
	    if (!this.props.newTodo) {
	      this.props.onSave(e.target.value)
	    }
  	}

	render() {

		console.log('==========TodoTextInput render===========')
		console.dir(this.props)
		console.log('newTodo = ' + this.props.newTodo)

		return (
			<input className={
					classnames({
						edit: this.props.editing,
						'new-todo': this.props.newTodo
					})
				} 
				type="text"
				placeholder={this.props.placeholder}
				autoFocus="true"
				value={this.state.text}
				onBlur={this.handleBlur.bind(this)}
				onChange={this.handleChange.bind(this)}
				onKeyDown={this.handleSubmit.bind(this)}
				/>
		)
	}
}

TodoTextInput.propTypes = {
	onSave: PropTypes.func.isRequired,
	text: PropTypes.string,
	placeholder: PropTypes.string,
	editing: PropTypes.bool,
	newTodo: PropTypes.bool
}

export default TodoTextInput