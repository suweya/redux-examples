let nextTodoId = 0

export const addTodo = (text) => {
	console.log('ACTION ADD_TODO : ' + text)
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	console.log('ACTION SET_VISIBILITY_FILTER : ' + filter)
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}