import {
	combineReducers
} from 'redux';
import users from './users';
import user from './user';
import {
	reducer as formReducer
} from 'redux-form';

export default combineReducers({
	users,
	user,
	formReducer
});