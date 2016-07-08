import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import App from './containers/App'
import todoApp from './reducers'
import DevTools from './devTools.js'

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore)

let store = finalCreateStore(todoApp)

render(
	<Provider store={store}>
		<div>
			<App/>
			<DevTools/>
		</div>
	</Provider>,
	document.getElementById('root')
)