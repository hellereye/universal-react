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

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
	blue300,
	indigo900,
	orange200,
	deepOrange300,
	pink400,
	purple500,
	yellow600
} from 'material-ui/styles/colors';

import Divider from 'material-ui/Divider';


import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';

import IconButton from 'material-ui/IconButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
	margin: 5,
};

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: blue500,
	},
	userAgent: false
});

injectTapEventPlugin();



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
			<MuiThemeProvider>
				<div>					
					<AppBar
					title="Title"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.handleToggle}
					/>
					<FloatingActionButton secondary={true}>
						<ContentAdd />
					</FloatingActionButton>
					
					<Drawer docked={true} open={this.state.open} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
						<List>		
							<ListItem
							leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
							rightIcon={<ActionInfo />}
							primaryText="Vacation itinerary"
							secondaryText="Jan 20, 2014"
							/>
							<ListItem
							leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
							rightIcon={<ActionInfo />}
							primaryText="Kitchen remodel"
							secondaryText="Jan 10, 2014"
							/>				
							<Link to="/new">
								<ListItem 
									leftAvatar={
										<Avatar
										  icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
										  color={blue300}
										  backgroundColor={indigo900}
										  size={30}
										  style={style}
										>
										</Avatar>								
									}
								>
									课堂管理
								</ListItem>
							</Link>
							<Divider />
							<Link to="/login">
								<ListItem
									leftAvatar={
									<Avatar
									  icon={<FileFolder />}
									  color={orange200}
									  backgroundColor={pink400}
									  size={30}
									  style={style}
									/>
								}
								>
									登录
								</ListItem>
							</Link>
							<Divider />
							<ListItem							
								leftAvatar={
									<Avatar color={deepOrange300} backgroundColor={purple500} size={30} style={style}>
										A
									</Avatar>
								}
							>
								Letter Avatar with custom colors and size
							</ListItem>
						</List>
			        </Drawer>
					<nav>
						<ul>
							<li><Link to='/'>Users</Link></li>
						</ul>
					</nav> 
					{
						this.props.children
					} 

					
						
				</div>

			</MuiThemeProvider>
		);
	}
}

export default App;