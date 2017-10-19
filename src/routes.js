import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { history } from './redux/store';
import App from './App';

export default () => (
	<Router history={history}>
		<div>
			<Route path="/" component={App} >
			</Route>
		</div>
	</Router>
);