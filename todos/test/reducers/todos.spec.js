import expect from 'expect'
import todos from '../../src/reducers'

const todoInitState = {
	todos: {
	  filter: 'SHOW_ALL',
	  todoList: []
	}
}

describe('todos reducer', () => {

	it('should handle initial state', () => {
		expect(todos(undefined, {})).toEqual(todoInitState)
	})

})