import React, { Component } from "react"
import queryString from "query-string";
import axios from "axios";

// Material UI Components
import {
	Card,
	// CardActions,
	// CardContent,
	// CardHeader,
	CardMedia,
	Grid,
	Link,
	Typography
} from '@material-ui/core';

// Import API
// import {
// 	// instagramAuth,
// 	// instagram,
// 	instagramV1
// } from "../utils/API";

// Style
import '../Styles/Photos.scss';

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: []
		};
	}

	async componentDidMount() {
		// componentDidMount() {
		let urlParams = queryString.parse(window.location.hash);

		// Get access token
		// let accessToken = await axios.post('https://api.instagram.com/oauth/access_token', {
		// 	app_id: "525651974946438",
		// 	app_secret: "32bd1815adfff549e36c8d5c878b9bfa",
		// 	// client_id: "1418891a59324d32aaf52df34acac0c2",
		// 	// client_secret: "9e25e7b5ceba4def95fffbed15e97323",
		// 	grant_type: "authorization_code",
		// 	// redirect_uri: "https://johnnycsharp.com/photos",
		// 	redirect_uri: "http://localhost:3000/photos",
		// 	code: urlParams.code
		// }, {
		// 	transformRequest: [(data, headers) => {
		// 		delete headers.post["Content-Type"];
		//
		// 		if (typeof data === 'object') {
		// 			data = JSON.stringify(data);
		// 		}
		//
		// 		return data;
		// 	}]
		// })
		// .catch(function(error) {
		// 	console.log(`Axios request failed: ${error}`);
		// 	console.log(error.toJSON());
		// });

		// axios.interceptors.response.use(response => {
		// 	console.log(response);
		// 	return response;
		// }, error => {
		// 	return Promise.reject(error);
		// });

		// let response = await axios.get('https://api.instagram.com/v1/users/self', {
		// let response = await axios.get('https://api.instagram.com/v1/users/self/media/recent', {

		axios.get('https://api.instagram.com/v1/users/self/media/recent', {
			params: {
				access_token: urlParams.access_token
			}
		}).then(response => {
			// console.log(response.data);
			let { data } = response.data;
			// console.log(data);
			data = data.filter(image => image.tags.includes("showcase"));
			// console.log(data);
			this.setState({ images: data });
		}).catch(error => {
			console.log(`Axios request failed: ${error}`);
			console.log(error.toJSON());
		});

		// let { data } = await response.data;
		// this.setState({ images: data });
	}

	render() {
		return (
			<>
				<div className="photos">
					<div className="tag-title">
						<Link target="_blank" href="https://www.instagram.com/realjohnnysharp/">
							@realjohnnysharp
						</Link>
					</div>
					<Grid
						container
						className="cards"
						direction="row"
						justify="center"
						alignItems="center"
						spacing={1}
					>
						{this.state.images.length === 0 ? <Typography>Photos coming soon</Typography> : this.state.images.map((image) =>
							<Grid key={image.id} item zeroMinWidth>
								<Link target="_blank" href={image.link}>
									<Card
										className="card"
										raised
										square
									>
										<CardMedia
											className="card-background"
											image={image.images.low_resolution.url}
											style={{ height: image.images.low_resolution.height }}
										/>
										{/* <CardContent className="title">
												<Typography
												noWrap
												display="block"
												variant="caption"
												>
												{image.caption.text}
												</Typography>
										</CardContent> */}
									</Card>
								</Link>
							</Grid>
						)}
					</Grid>
				</div>
			</>
		)
	}
}

export default Projects;
