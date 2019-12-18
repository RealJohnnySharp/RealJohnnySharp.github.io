import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
	ListItem,
	ListItemIcon,
} from '@material-ui/core';

import ArrowTooltip from '../ArrowTooltip';

// Style
import '../../Styles/NavBar.scss';

function NavPopoverItem(props) {
	const { icon, to, tooltip, tooltipPlacement } = props;

  return (
		<ArrowTooltip
			interactive
			title={tooltip}
			placement={tooltipPlacement}
		>
			<ListItem
				button
				href={to}
				target="_blank"
				key={tooltip}
				className="nav-item"
				classes={{
					gutters: 'gutters',
					selected: 'active'
				}}
				component="a"
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

NavPopoverItem.defaultProps = {
	selected: false,
}

NavPopoverItem.propTypes = {
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
	tooltip: PropTypes.string.isRequired,
	tooltipPlacement: PropTypes.string.isRequired,
};

export default NavPopoverItem;
