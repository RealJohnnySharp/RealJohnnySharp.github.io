import React, { Component } from 'react';
import headshot from '../Images/headshot.jpg';

// Material UI Components
import {
	Link,
	Typography
} from '@material-ui/core';

// Style
import '../Styles/Profile.scss';

class Profile extends Component {
	render() {
	  return (
			<>
				<div className="profile split">
					<div className="left">
						<div className="wrapper">
							<img src={headshot} className="headshot" alt="Headshot" />
							<h1>Johnny Sharp</h1>
							<p>Ohio, USA</p>
							<p>Ohio Northern University</p>
						</div>
					</div>
					<div className="right light">
						<Typography
							paragraph
							component="h2"
							variant="h5"
							classes={{
								paragraph: 'wrap'
							}}
						>
							Software Developer
							<small></small>
						</Typography>
						<Typography
							paragraph
							component="p"
							variant="subtitle1"
							classes={{
								paragraph: 'wrap'
							}}
						>
							Software Developer, always open to hearing about new opportunities.
							Currently employed at <Link href="https://advizex.com" target="_blank">Rolta Advizex</Link> as a ServiceNow Technical Consultant.
							Working on/looking for small projects to showcase on the Projects page, so stay tuned.
							Photos will be coming soon as well, with a new camera and a great desire to travel and see more places.
						</Typography>
					</div>
				</div>
			</>
	  )
	}
}

export default Profile;
