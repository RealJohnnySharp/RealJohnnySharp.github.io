import React, { Component, Suspense, lazy } from 'react';
// import logo from './logo.svg';

// Fontawesome Components
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Router Components
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
// import { browserHistory } from 'react-router';

// Material UI Components
// import { useMediaQuery } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

// Style
import '../Styles/App.scss';

// Import Components
import NavBar from './HeaderComponent/NavBar';
const HomePage = lazy(() => import('./HomePage'));
const Profile = lazy(() => import('./Profile'));
const Resume = lazy(() => import('./Resume'));
const Projects = lazy(() => import('./Projects'));
const Photos = lazy(() => import('./Photos'));
// import Footer from './FooterComponent/Footer';

// library.add(fab, fas);

// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

const theme = createMuiTheme({
	overrides: {
		MuiLink: {
			root: {
				color: "inherit",
			}
		},
		MuiFab: {
			root: {
				"&:hover": {
					"background-color": "inherit",
				}
			},
			colorInherit: {
				"background-color": "inherit",
			}
		},
	},
	palette: {
		// type: prefersDarkMode ? 'dark' : 'light',
		primary: { main: grey[50] },
		secondary: { main: grey[800] },
	},
});

const routes = [
	{
		name: "home",
		path: "/",
		exact: true,
		nav: () => <NavBar index={0} />,
		component: () => <HomePage />
	},
	{
		name: "profile",
		path: "/profile",
		nav: () => <NavBar index={1} />,
		component: () => <Profile />
	},
	{
		name: "resume",
		path: "/resume",
		nav: () => <NavBar index={2} />,
		component: () => <Resume />
	},
	{
		name: "projects",
		path: "/projects",
		nav: () => <NavBar index={3} theme="dark" />,
		component: () => <Projects />
	},
	{
		name: "photos",
		path: "/photos",
		nav: () => <NavBar index={4} theme="dark" />,
		component: () => <Photos />
	}
]

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								name={route.name}
								path={route.path}
								exact={route.exact}
								children={route.nav}
							/>
						))}
					</Switch>

					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									name={route.name}
									path={route.path}
									exact={route.exact}
									component={route.component}
								/>
							))}
						</Switch>
					</Suspense>
					{/* <Footer /> */}
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
