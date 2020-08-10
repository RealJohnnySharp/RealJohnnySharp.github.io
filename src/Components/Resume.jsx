import React, { Component } from "react"

// React PDF Components
import { Document, Page, pdfjs } from 'react-pdf';

// Material UI Components
import {
	Grid,
	Hidden,
	IconButton,
	Link,
} from '@material-ui/core';

// Material UI Icons
import {
	DescriptionOutlined,
	GetAppRounded,
	NavigateBeforeRounded,
	NavigateNextRounded,
} from '@material-ui/icons';

// Style
import '../Styles/Resume.scss';

// File
import myResume from '../Files/Johnny Sharp Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Projects extends Component {
	constructor(props) {
		super(props);

		this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.nextPage = this.nextPage.bind(this);

		this.state = {
			numPages: null,
			pageNumber: 1,
		}
	}

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	}

	previousPage = () => {
		this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
	}

	nextPage = () => {
		this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
	}

	render() {
		const { pageNumber, numPages } = this.state;
		return (
			<>
				<div className="resume split">
					<div className="left">
						<div className="wrapper">
							<DescriptionOutlined style={{ fontSize: 60 }} />
							<h1>Resume</h1>
							<Link href={myResume} target="_blank" className="pdf" download>
								<GetAppRounded />
								download resume.pdf
							</Link>
						</div>
					</div>
					<Hidden smDown>
						<div className="right light">
							{/* <img src="" className="resume-image" alt="Resumé" /> */}
							<Grid
								container
								alignItems="center"
								justify="center"
								md="auto"
							>
								<IconButton
									aria-label="previous page"
									color="primary"
									disabled={pageNumber <= 1}
									onClick={this.previousPage}
									size="medium"
								>
									<NavigateBeforeRounded fontSize="large" />
								</IconButton>
								<Document
									file={myResume}
									onLoadSuccess={this.onDocumentLoadSuccess}
									className="resume-display"
								>
									<Page
										// height={725}
										pageNumber={pageNumber}
										// renderMode="svg"
										scale={0.91}
									/>
								</Document>
								<IconButton
									aria-label="next page"
									color="primary"
									disabled={pageNumber >= numPages}
									onClick={this.nextPage}
									size="medium"
								>
									<NavigateNextRounded fontSize="large" />
								</IconButton>
							</Grid>
						</div>
					</Hidden>
				</div>
			</>
		)
	}
}

export default Projects;
