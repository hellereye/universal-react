//import * as constants from '../constants'

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';


export function login(data) {
	return {
		type: USER_LOGGED_IN,
		payload: data
	}
}

export function logout() {
	return {
		type: USER_LOGGED_OUT
	}
}