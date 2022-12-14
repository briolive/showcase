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

function* fetchShowDetails(action) {
    try {
        const show = yield axios.get(`/api/show/${action.payload}`);
        yield put({ type: 'SET_SHOW_DETAILS', payload: show.data });
    } catch (error) {
        console.log('error in fetchShowDetails', error);
    }
}

// CREATE
function* addShow() {

}

// UPDATE
function* editShow(action) {
    try {
        yield axios.put(`/api/show/${action.payload.id}`, action.payload);
        if (action.history) {
            action.history.goBack();
        }
    } catch (e) {
        console.log(e);
    }
}

function* showSaga() {
    yield takeLatest('FETCH_SHOWS', fetchShows);
    yield takeLatest('ADD_SHOW', addShow);
    yield takeLatest('FETCH_SHOW_DETAILS', fetchShowDetails);
    yield takeLatest('EDIT_SHOW', editShow);
}

export default showSaga;