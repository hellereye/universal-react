import React from 'react';
import {
	Route,
	IndexRoute
} from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import User from './containers/User';
import Login from './components/Login';

import reduxForm from './containers/reduxForm';
import NoMatch from './containers/NoMatch';
import {
	UserAuthWrapper
} from 'redux-auth-wrapper';

import {
	routerActions
} from 'react-router-redux'

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.user, // how to get the user state
	redirectAction: routerActions.replace, // the redux action to dispatch for redirect
	wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
});

// const getRoutes = (store) => {
// 	const connect = (fn) => (nextState, replaceState) => fn(store, nextState, replaceState);

// 	return (
// 		<Route>
//       <Route path="/" component={App}>
//         <Route path="login" component={Login}/>
//         <Route path="foo" component={UserIsAuthenticated(Foo)} onEnter={connect(UserIsAuthenticated.onEnter)} />
//       </Route>
//     </Route>
// 	);
// };

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path="login" component={Login}/>
		<Route path="new" component={UserIsAuthenticated(reduxForm)} />
		<Route path='user/:id' component={User} />		
		<Route path="*" component={NoMatch} />
	</Route>
);