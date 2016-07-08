import { connect } from 'react-redux'
import App from '../components/App'
import { toggleTodo, addTodo, setVisibilityFilter } from '../actions'

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos.todoList, state.todos.filter),
		filter: state.todos.filter
	}
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		},
		addTodo: (text) => {
			console.log('dispatch addTodo')
			dispatch(addTodo(text))
		},
		setFilter: (active) => {
			dispatch(setVisibilityFilter(active))
		}
	}
}

const AppSmart = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppSmart