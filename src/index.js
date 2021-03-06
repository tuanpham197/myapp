import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers/index';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(sagaMiddleware),
	// other store enhancers if any
);
const store = createStore(
	rootReducers,
	enhancer,
);
sagaMiddleware.run(rootSaga)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
