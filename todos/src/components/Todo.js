import React, { Component, PropTypes } from 'react'
import style from '../../style/todo.css'

export default class Todo extends Component {

	render() {
		return (
			<li onClick={this.props.onClick} className={this.props.completed ? style.completed : style.none_completed}>{this.props.text}</li>
		)
	}
}

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}