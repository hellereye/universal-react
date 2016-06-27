import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router';
import Helmet from 'react-helmet';


import injectTapEventPlugin from 'react-tap-event-plugin';

import {
	blue500
} from 'material-ui/styles/colors';
import {
	AppBar
} from 'material-ui';
import {
	RaisedButton
} from 'material-ui';

import {
	MenuItem
} from 'material-ui';

import {
	Drawer
} from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
	margin: 12,
};

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: blue500,
	},
	userAgent: false,
	drawer: {
		zIndex: 1000,
	},
});

injectTapEventPlugin();
// import { Grid, Row, Col } from 'react-flexbox-grid';
const {
	Grid,
	Row,
	Col
} = require('react-flexbox-grid');


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleToggle = (e) => {

		this.setState({
			open: !this.state.open
		});

	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>

				<div>
					
					<AppBar
					title="Title"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
					/>
					<Drawer docked={true} open={this.state.open} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
						
						<MenuItem>课堂管理</MenuItem>
						<MenuItem>用户管理</MenuItem>
						<MenuItem>用户管理</MenuItem>
						<MenuItem>录制管理</MenuItem>
						<MenuItem>文档管理</MenuItem>
						<MenuItem>站点配置 </MenuItem>
						<MenuItem>统计报告</MenuItem>
			        </Drawer>
				
				
					<nav>
						<ul>
							<li><Link to='/'>Users</Link></li>
						</ul>
					</nav> 
					{
						this.props.children
					} 

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

			</MuiThemeProvider>
		);
	}
}

export default App;