import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import './styles/Main.scss';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={Store}>
		<AppRouter />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
