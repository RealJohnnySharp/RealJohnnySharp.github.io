import React from 'react';
import PropTypes from 'prop-types';

// Router components
// import { Link as RouterLink } from 'react-router-dom';

// Material UI Components
import { List, Popover } from '@material-ui/core';

// Material UI Icons
import {
	DescriptionOutlined,
	EmailOutlined,
	GitHub,
	LinkedIn,
	PaymentOutlined,
	PhoneOutlined,
} from '@material-ui/icons';

// import NavItem from './NavItem';
import NavPopoverItem from './NavPopoverItem';

// Style
import '../../Styles/NavBar.scss';

function NavPopover(props) {
	const { anchorEl, anchorOrigin, elevation, onClose, transformOrigin } = props;

	const open = Boolean(anchorEl);

	const handlePopoverClose = () => {
		onClose();
  };

  return (
		<Popover
			id='contact-popover'
			classes={{
				root: "contact-background",
				paper: "contact-navigation"
			}}
			open={open}
			anchorEl={anchorEl}
			onClose={handlePopoverClose}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			elevation={elevation}
		>
			<List
				dense
				component="div"
				classes={{
					padding: 'nav-list'
				}}
			>
				<NavPopoverItem
					to="mailto:johnny@johnnycsharp.com"
					icon={<EmailOutlined color="primary" />}
					tooltip="Mail"
					tooltipPlacement="top"
				/>
				<NavPopoverItem
					to="https://blog.johnnycsharp.com"
					icon={<DescriptionOutlined color="primary" />}
					tooltip="Blog"
					tooltipPlacement="top"
				/>
				<NavPopoverItem
					to="tel:+14437471189"
					icon={<PhoneOutlined color="primary" />}
					tooltip="Phone"
					tooltipPlacement="top"
				/>
				<NavPopoverItem
					to="https://github.com/RealJohnnySharp"
					icon={<GitHub color="primary" />}
					tooltip="GitHub"
					tooltipPlacement="top"
				/>
				<NavPopoverItem
					to="https://www.linkedin.com/in/johnny-sharp/"
					icon={<LinkedIn color="primary" />}
					tooltip="LinkedIn"
					tooltipPlacement="top"
				/>
				<NavPopoverItem
					to="https://paypal.me/realjohnnysharp"
					icon={<PaymentOutlined color="primary" />}
					tooltip="Payment"
					tooltipPlacement="top"
				/>
			</List>
		</Popover>
  );
}

NavPopover.defaultProps = {
	elevation: 0
}

NavPopover.propTypes = {
	anchorEl: PropTypes.any,
	anchorOrigin: PropTypes.object.isRequired,
	elevation: PropTypes.number,
  onClose: PropTypes.func.isRequired,
	transformOrigin: PropTypes.object.isRequired,
};

export default NavPopover;
