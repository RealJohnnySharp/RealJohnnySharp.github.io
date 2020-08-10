import React from 'react';
import PropTypes from 'prop-types';

// Router components
import { Link as RouterLink } from 'react-router-dom';

// Material UI Components
import {
	ListItem,
	ListItemIcon,
} from '@material-ui/core';

// Import Custom Components
import ArrowTooltip from '../ArrowTooltip';

// Style
import '../../Styles/NavBar.scss';

function NavItem(props) {
	const { icon, selected, to, tooltip, tooltipPlacement } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				// With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
				// See https://github.com/ReactTraining/react-router/issues/6056
				<RouterLink to={to} {...itemProps} innerRef={ref} />
			)),
		[to],
	);

	return (
		<ArrowTooltip
			interactive
			title={tooltip}
			placement={tooltipPlacement}
		>
			<ListItem
				button
				key={tooltip}
				className="nav-item"
				classes={{
					gutters: 'gutters',
					selected: 'active'
				}}
				selected={selected}
				component={renderLink}
			>
				<ListItemIcon
					classes={{
						root: 'nav-icon'
					}}
				>
					{icon}
				</ListItemIcon>
			</ListItem>
		</ArrowTooltip>
	);
}

NavItem.defaultProps = {
	selected: false,
}

NavItem.propTypes = {
	icon: PropTypes.element.isRequired,
	selected: PropTypes.bool,
	to: PropTypes.string.isRequired,
	tooltip: PropTypes.string.isRequired,
	tooltipPlacement: PropTypes.string.isRequired,
};

export default NavItem;
