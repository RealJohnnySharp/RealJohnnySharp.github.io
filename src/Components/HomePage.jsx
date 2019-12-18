import React, { Component } from 'react';

// Router Components
import { Link as RouterLink } from 'react-router-dom';

// Material UI Components
import { Fab, Grid, Link } from '@material-ui/core';

// Material UI Icons
import {
	AccountCircleOutlined,
	WorkOutline,
	PhotoCameraOutlined,
} from '@material-ui/icons';

// Style
import '../Styles/HomePage.scss';

class HomePage extends Component {
  render() {
    return (
			<>
				<div className="welcome normal-dark">
					<div className="wrapper">
						<h1>Johnny Sharp</h1>

						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
							spacing={3}
						>
							{/* <Grid item sm={4}> */}
							<Grid item>
								<RouterLink to="/profile"
									className="icon"
								>
									<Fab
										disableRipple
										variant="extended"
										color="inherit"
										aria-label="profile"
										// className="icon"
										classes={{
											extended: "extended",
											label: "icon-label"
										}}
									>
										<AccountCircleOutlined fontSize="large" />
										<span>Profile</span>
									</Fab>
								</RouterLink>
							</Grid>
							{/* <Grid item sm={4}> */}
							<Grid item>
								<RouterLink to="/projects" className="icon">
									<Fab
										disableRipple
										variant="extended"
										color="inherit"
										aria-label="projects"
										classes={{
											extended: "extended",
											label: "icon-label"
										}}
									>
										<WorkOutline fontSize="large" />
										<span>Projects</span>
									</Fab>
								</RouterLink>
							</Grid>
							{/* <Grid item sm={4}> */}
							<Grid item>
								<Link
									className="icon"
									href="https://api.instagram.com/oauth/authorize/?client_id=1418891a59324d32aaf52df34acac0c2&redirect_uri=http://localhost:3000/photos&response_type=token"
									target="_self"
									underline="none"
								>
									<Fab
										disableRipple
										variant="extended"
										color="inherit"
										aria-label="photos"
										classes={{
											extended: "extended",
											label: "icon-label"
										}}
									>
										<PhotoCameraOutlined fontSize="large" />
										<span>Photos</span>
									</Fab>
								</Link>
							</Grid>
						</Grid>
					</div>
				</div>
			</>
    )
  }
}

export default HomePage;
