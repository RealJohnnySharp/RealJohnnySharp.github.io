import React, { Component } from 'react';

// Material UI Components
import {
	Drawer,
	Fab,
	Hidden,
	// IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
} from '@material-ui/core';

// Material UI Icons
import {
	// AccountCircleOutlined,
	ChatOutlined,
	CloseRounded,
	DescriptionOutlined,
	HomeOutlined,
	MenuRounded,
	PhotoCameraOutlined,
	PortraitOutlined,
	WorkOutline
} from '@material-ui/icons';

// Import components
import NavItem from './NavItem';
import NavPopover from './NavPopover';
import ArrowTooltip from '../ArrowTooltip';

// Style
import '../../Styles/NavBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);

		this.iconColor = 'primary';

		if (props.theme === 'dark') {
			this.iconColor = 'secondary';
		}

		this.handlePopoverClick = this.handlePopoverClick.bind(this);
		this.handlePopoverClose = this.handlePopoverClose.bind(this);
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);

    this.state = {
			selectedIndex: props.index,
			anchorEl: null,
			mobileOpen: false,
		};

		this.drawer = (
			<List
				dense
				component="div"
				classes={{
					padding: 'nav-list'
				}}
			>
				<NavItem
					to="/"
					icon={<HomeOutlined color={this.iconColor} />}
					selected={this.state.selectedIndex === 0}
					tooltip="Home"
					tooltipPlacement="right"
				/>
				<NavItem
					to="/profile"
					// icon={<AccountCircleOutlined color={this.iconColor} />}
					icon={<PortraitOutlined color={this.iconColor} />}
					selected={this.state.selectedIndex === 1}
					tooltip="Profile"
					tooltipPlacement="right"
				/>
				<NavItem
					to="/resume"
					icon={<DescriptionOutlined color={this.iconColor} />}
					selected={this.state.selectedIndex === 2}
					tooltip="Resume"
					tooltipPlacement="right"
				/>
				<NavItem
					to="/projects"
					icon={<WorkOutline color={this.iconColor} />}
					selected={this.state.selectedIndex === 3}
					tooltip="Projects"
					tooltipPlacement="right"
				/>
				<NavItem
					to="/photos"
					icon={<PhotoCameraOutlined color={this.iconColor} />}
					selected={this.state.selectedIndex === 4}
					tooltip="Photos"
					tooltipPlacement="right"
				/>
				{/* <ArrowTooltip
					interactive
					title="Photos"
					placement="right"
					>
					<ListItem
						button
						key="Photos"
						className="nav-item"
						classes={{
					gutters: 'gutters',
					selected: 'active'
						}}
						selected={this.state.selectedIndex === 4}
					>
						<Link
					target="_self"
					// href="https://api.instagram.com/oauth/authorize?app_id=525651974946438&redirect_uri=https%3A%2F%2Fjohnnycsharp.com%2Fphotos&scope=user_profile,user_media&response_type=code"
					// href="https://api.instagram.com/oauth/authorize/?client_id=1418891a59324d32aaf52df34acac0c2&redirect_uri=http://localhost:3000/photos&response_type=code"
					// href="https://api.instagram.com/oauth/authorize/?client_id=1418891a59324d32aaf52df34acac0c2&redirect_uri=http://localhost:3000/photos&response_type=token"
					href="https://api.instagram.com/oauth/authorize/?client_id=1418891a59324d32aaf52df34acac0c2&redirect_uri=http://test.johnnycsharp.com/photos&response_type=token"
						>
					<ListItemIcon
					classes={{
					root: 'nav-icon'
					}}
					>
					<PhotoCameraOutlined color={this.iconColor} />
					</ListItemIcon>
						</Link>
					</ListItem>
				</ArrowTooltip> */}
				<ArrowTooltip
					interactive
					title="Contact"
					placement="right"
				>
					<ListItem
						aria-describedby={Boolean(this.state.anchorEl) ? 'contact-popover' : undefined}
						button
						key="home"
						className="nav-item"
						classes={{
							gutters: 'gutters',
							selected: 'active'
						}}
						onClick={this.handlePopoverClick}
					>
						<ListItemIcon
							classes={{
								root: 'nav-icon'
							}}
						>
							<ChatOutlined color={this.iconColor} />
						</ListItemIcon>
					</ListItem>
				</ArrowTooltip>
			</List>
		);
  }

	handleDrawerToggle() {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

	handlePopoverClick(event) {
		const target = event.currentTarget;
		this.setState(state => ({ anchorEl: target }));
	}

	handlePopoverClose() {
		this.setState(state => ({ anchorEl: null }));
	}

  render() {
		return (
			<>
				<Hidden smUp>
					<Fab
						color="secondary"
						aria-label="open drawer"
						onClick={this.handleDrawerToggle}
						classes={{
							root: "mobile-nav-button"
						}}
					>
						{this.state.mobileOpen ? <CloseRounded /> : <MenuRounded />}
					</Fab>
					<Drawer
						variant="temporary"
						anchor="left"
						open={this.state.mobileOpen}
						onClose={this.handleDrawerToggle}
						classes={{
							root: "mobile-nav",
							paper: "nav-paper",
							paperAnchorDockedLeft: 'nav-paper-left-docked'
						}}
						ModalProps={{
							BackdropProps: {
								invisible: true,
							},
							disableScrollLock: true,
							keepMounted: true,
						}}
					>
						{this.drawer}
					</Drawer>
					<NavPopover
						anchorEl={this.state.anchorEl}
						onClose={this.handlePopoverClose}
						anchorOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'center',
							horizontal: 'left',
						}}
					/>
				</Hidden>
				<Hidden xsDown>
					<Drawer
						variant="permanent"
						classes={{
							root: 'navigation',
							paper: 'nav-paper',
							paperAnchorDockedLeft: 'nav-paper-left-docked'
						}}
						anchor="left"
					>
						{this.drawer}
					</Drawer>
					<NavPopover
						anchorEl={this.state.anchorEl}
						onClose={this.handlePopoverClose}
						anchorOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'center',
							horizontal: 'left',
						}}
					/>
				</Hidden>
			</>
		)
  }
}

export default NavBar;
