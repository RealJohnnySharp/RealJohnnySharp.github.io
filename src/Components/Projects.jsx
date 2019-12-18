import React, { Component } from "react"

// Material UI Components
import {
	// Card,
	// CardActions,
	// CardContent,
	// CardHeader,
	// CardMedia,
	// Grid,
	// Link,
	Typography
} from '@material-ui/core';

// Material UI Icons
import { CodeRounded } from '@material-ui/icons';

// Style
import '../Styles/Projects.scss';

class Projects extends Component {
	render() {
	  return (
			<>
				<div className="projects split">
					<div className="left">
						<div className="wrapper">
							<CodeRounded style={{ fontSize: 60 }} />
							<h1>Projects</h1>
							<span>A collection of things I have built.</span>
						</div>
					</div>
					<div className="right cards">
						<Typography>Projects coming soon</Typography>
					</div>
				</div>
			</>
	  )
	}
}

export default Projects;
