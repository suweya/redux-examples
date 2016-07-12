import React, { Component, PropTypes } from 'react'
import Header from './Header'
import MainSection from './MainSection'

class App extends Component {

	render() {
		console.log('============App render=================')
		console.dir(this.props)

		const { todos, actions } = this.props

		return (
			<div>
				<Header addTodo={actions.addTodo}/>
				<MainSection todos={todos} actions={actions}/>
			</div>
		)
	}
}

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default App