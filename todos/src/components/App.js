import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

export default class App extends React.Component {

	addTodo(text) {
		console.log('App Component addTodo ' + text)
		this.props.addTodo(text)
	}

	render() {
		return (
			<div>
				<AddTodo addTodo={this.addTodo.bind(this)}/>
				<TodoList todos={this.props.todos} onTodoClick={this.props.onTodoClick}/>
				<Footer setFilter={this.props.setFilter} filter={this.props.filter}/>
			</div>
		)
	}
}