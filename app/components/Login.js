import React, {
	Component,
	PropTypes
} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
	bindActionCreators
} from 'redux';
import {
	connect
} from 'react-redux';
import {
	reduxForm
} from 'redux-form';
import Helmet from 'react-helmet';
import {
	login
} from '../actions/login';
import {
	routerActions
} from 'react-router-redux';

export class LoginContainer extends React.Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		replace: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {
			isAuthenticated,
			replace,
			redirect
		} = this.props
		if (isAuthenticated) {
			replace(redirect)
		}
	}

	componentWillReceiveProps(nextProps) {
		const {
			isAuthenticated,
			replace,
			redirect
		} = nextProps
		const {
			isAuthenticated: wasAuthenticated
		} = this.props

		if (!wasAuthenticated && isAuthenticated) {
			replace(redirect)
		}
	}

	onClick = (e) => {
		e.preventDefault();
		console.log(`Login: ${name}`);
		this.props.login({
			name: this.refs.name.getValue,
			//isAdmin: this.refs.admin.checked
		})
	};


	render() {
		//console.log(this.props.user);
		return (
			<form style={{textAlign:'center'}} onSubmit={this.onClick}>
	            <Helmet title="Login page"/>
	            <TextField
	                style={{textAlign:'left'}}
	                ref="name"
	                hintText="Enter your username"
	                floatingLabelText="Login"
	                /><br/>
	            <TextField
	                ref="password"
	                hintText="Enter your password"
	                floatingLabelText="Password"
	                type="password"
	                /><br/>
	            <RaisedButton label="Login" secondary={true} onClick={this.onClick} onTouchTap={this.onClick}/>
        	</form>
		);
	}
}

function select(state, ownProps) {
	const isAuthenticated = state.user.name || false
	const redirect = ownProps.location.query.redirect || '/'
	return {
		isAuthenticated,
		redirect
	}
}

export default connect(select, {
	login,
	replace: routerActions.replace
})(LoginContainer)