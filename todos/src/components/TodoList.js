import React, { PropType } from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

	itemClick(id) {
		console.log('TodoList Component itemClick ' + id)
		this.props.onTodoClick(id)
	}

	render() {

		let children = [];
		let data = this.props.todos || [] 
		data.map((todo, index) => {
			children.push(<Todo key={index} onClick={this.itemClick.bind(this, todo.id)} {...todo} />)
		})

		return (
			<ul>
				{ children }
			</ul>
		)
	}
}

