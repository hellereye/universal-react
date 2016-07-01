import {
	combineReducers
} from 'redux';
import users from './users';
import user from './user';
import {
	reducer as formReducer
} from 'redux-form';

import {
	routerReducer
} from 'react-router-redux';


// const appReducers = combineReducers({
// 	users,
// 	user,
// 	formReducer
// })

// export default appReducers;
export default combineReducers({
	users,
	user,
	formReducer,
	routing: routerReducer
});