import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (initialState) => {
	const store = createStore(rootReducer, initialState)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default
			store.replaceReducer(nextReducer)
		})
	}

	return store
}

export default configureStore