import { combineReducers } from 'redux'

const todoInitState = {
  filter: 'SHOW_ALL',
  todoList: []
}

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const todos = (state = todoInitState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let todoList = [ ...state.todoList, todo(undefined, action) ]
      return Object.assign({}, state, {
        todoList: todoList
      })
    case 'TOGGLE_TODO':
      let temp = state.todoList.map(t =>
        todo(t, action)
      )
      return Object.assign({}, state, {
        todoList: temp
      })
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        filter: action.filter
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp