// SAGA STEP 1: Create a saga file and export it
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// READ
function* fetchShows() {
    try {
        const response = yield axios.get('/api/show');
        yield put({ type: 'SET_SHOWS', payload: response.data });
    } catch (error) {
        console.log('Shows list GET request failed', error);
    }
}

// CREATE
function* addShow() {

}

function* showSaga() {
    yield takeLatest('FETCH_SHOWS', fetchShows);
    yield takeLatest('ADD_SHOW', addShow);
}

export default showSaga;