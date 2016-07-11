import * as types from '../constants/ActionTypes'

export addTodo(text) => {
	return {
		type: types.ADD_TODO,
		text
	}
}

export deleteTodo(id) => {
	return {
		type: types.DELETE_TODO,
		id
	}
}

export editTodo(id, text) => {
	return {
		type: types.EDIT_TODO,
		id,
		text
	}
}

export completeTodo(id) => {
	return {
		type: types.COMPLETE_TODO,
		id
	}
}

export completeAll() {
	return {
		type: types.COMPLETE_ALL
	}
}

export clearCompleted() {
	return {
		type: types.CLEAR_COMPLETED
	}
}