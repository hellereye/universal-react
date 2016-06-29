import React, {
	Component
} from 'react';
import Helmet from 'react-helmet';
import {
	connect
} from 'react-redux';
import {
	Link
} from 'react-router';
import * as UsersActions from '../actions/users';
import UserList from '../components/UserList';

// import { Grid, Row, Col } from 'react-flexbox-grid';
const {
	Grid,
	Row,
	Col
} = require('react-flexbox-grid');

import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card';

import {
	RaisedButton
} from 'material-ui';

import FlatButton from 'material-ui/FlatButton';

const style = {
	margin: 12,
};

// @connect(state => { users: state.users })
class Home extends Component {

	static readyOnActions(dispatch) {
		return Promise.all([
			dispatch(UsersActions.fetchUsersIfNeeded())
		]);
	}

	componentDidMount() {
		Home.readyOnActions(this.props.dispatch);
	}

	renderUsers() {
		const users = this.props.users;

		if (users.readyState === UsersActions.USERS_INVALID ||
			users.readyState === UsersActions.USERS_FETCHING) {
			return <p>Loading...</p>;
		}

		if (users.readyState === UsersActions.USERS_FETCH_FAILED) {
			return <p>Failed to fetch users</p>;
		}

		return <UserList users={users.list} />;
	}

	render() {
		return (
			<div>
				<Helmet title='Home' />
				<h5>Users:</h5>
				{this.renderUsers()}

				<Grid>
					<Row>
						<Col lg={3}>
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="雅思英语第二节" subtitle="Overlay subtitle" />}
							    >
								<img src="http://lorempixel.com/300/164/nature/" />
							    </CardMedia>
							    
							    <CardText>
							      最及时考试资讯和预测机经，顶尖教研团队特供真题解析
							     
							    </CardText>
							    <CardActions>
							      <FlatButton label="进入课堂" />
							      <RaisedButton label="Primary" primary={true} style={style} />
							    </CardActions>
							</Card>
						</Col>
						<Col lg={3}>
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="托福应用一对一培训" subtitle="Overlay subtitle" />}
							    >
							      <img src="http://lorempixel.com/300/164/abstract/" />
							    </CardMedia>
							    
							    <CardText>
							      历年官方真题雅思机经追击，英伦腔明星老师掀屠鸭热潮
							     
							    </CardText>
							    <CardActions>
							      <FlatButton label="进入课堂" />
							      <RaisedButton label="Primary" primary={true} style={style} />
							    </CardActions>
							</Card>
						</Col>
						<Col lg={3}>
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="托福应用一对一培训" subtitle="Overlay subtitle" />}
							    >
							      <img src="http://lorempixel.com/300/164/animals/" />
							    </CardMedia>
							    
							    <CardText>
							    	考前读机经考后真题看解析，解读改革新政全力备战2016
							     
							    </CardText>
							    <CardActions>
							      <FlatButton label="进入课堂" />
							      <RaisedButton label="Primary" primary={true} style={style} />
							    </CardActions>
							</Card>
						</Col>
						<Col lg={3}>
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
							    >
							      <img src="http://lorempixel.com/300/164/fashion/" />
							    </CardMedia>
							    
							    <CardText>
							    	全面攻克写作数学逻辑难关，手捧奖学金踏上研究生之路							     
							    </CardText>
							    <CardActions>
							      <FlatButton label="进入课堂" />
							      <RaisedButton label="Primary" primary={true} style={style} />
							    </CardActions>
							</Card>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(Home);