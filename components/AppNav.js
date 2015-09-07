import React, {Component} from 'react';
import mui from 'material-ui';
import LeftNav from './custom-ui-components/left-nav';
import MenuItem from './custom-ui-components/left-nav';
import Sticky from 'react-sticky';

const AppBar = mui.AppBar;
// const MenuItem = mui.LeftNav;
// const MenuItem = mui.MenuItem;
const styles = {
	stickyHeader: {
		backgroundColor: 'rgba(2, 119, 189, 0.8)'
	}
}
const menuItems = [
  { href: '/#projects', text: 'Projects' },
  { href: '/#skills', text: 'Skills Section' },
  { href: '/#education', text: 'Education Section' },
  { href: '/#experience', text: 'Experience Section' },
  { href: '/#contact', text: 'About/Contact Section' },

  
];

export default class AppNav extends Component {
	handleClick(e) {
		this.refs.leftNav.toggle();
	}

	render() {
		return(
			<div>
				<Sticky>
					<AppBar onLeftIconButtonTouchTap={::this.handleClick} style={styles.stickyHeader} />
				</Sticky>
			{/*Had to hack the damn material-ui files to add a tag and href to regular menu item because material ui menu item will NOT close menu on cick. See custom-ui-components for components I had to customize :(*/}
				<LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
			</div>
		);
	}
}