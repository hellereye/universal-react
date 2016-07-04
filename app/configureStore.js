// import {
// 	createStore,
// 	applyMiddleware
// } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware(
// 	thunkMiddleware
// )(createStore);

// export default function configureStore(initialState) {
// 	const store = createStoreWithMiddleware(rootReducer, initialState);

// 	if (module.hot) {
// 		// Enable Webpack hot module replacement for reducers
// 		module.hot.accept('./reducers', () => {
// 			const nextRootReducer = require('./reducers').default;
// 			store.replaceReducer(nextRootReducer);
// 		});
// 	}

// 	return store;
// };

import {
	applyMiddleware,
	compose,
	createStore
} from 'redux'
import {
	routerMiddleware
} from 'react-router-redux'
import thunk from 'redux-thunk'

//import reducers from './reducers'
import rootReducer from './reducers';

export default (initialState, history) => {
	let middleware = applyMiddleware(thunk, routerMiddleware(history))
		//initialState = initialState || {};
		// Use DevTools chrome extension in development
		// if (module.hot) {
		// 	const devToolsExtension = window.devToolsExtension

	// 	if (typeof devToolsExtension === 'function') {
	// 		middleware = compose(middleware, devToolsExtension())
	// 	}
	// }

	const store = createStore(rootReducer, initialState, middleware)

	//store.asyncReducers = {}

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const reducers = require('./reducers').default

			store.replaceReducer(reducers)
		})
	}

	return store
}