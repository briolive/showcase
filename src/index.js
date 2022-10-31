import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import store from './redux/store';

import App from './components/App/App';


// // create the rootSaga generator function (watcher saga)
// function* rootSaga() {
//   yield takeEvery('FETCH_SHOWS', fetchShows);
// }

// function* fetchShows() {
//   // get all shows from the database
//   console.log('in fetchShows');
//   try {
//     const shows = yield axios.get('/api/show');
//     console.log('get all:', shows.data);
//     yield put({ type: 'SET_SHOWS', payload: shows.data });
//   } catch (error) {
//     console.log('error in fetchShows', error);
//   }
// }

// function* fetchShowDetails(action) {}


// // Create sagaMiddleware
// const sagaMiddleware = createSagaMiddleware();


// // Create one store that all components can use
// const storeInstance = createStore(
//   combineReducers({
//       shows, 
//   }),
//   // Add sagaMiddleware to our store
//   applyMiddleware(sagaMiddleware, logger),
// );

// // Pass rootSaga into our sagaMiddleware
// sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
