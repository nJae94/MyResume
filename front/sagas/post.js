import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_FAILURE, ADD_POST_SUCCESS } from '../reducers/post';
import axios from 'axios';

function addPostAPI(postData) {

  return axios.post('/post/', postData);
}

function* addPost(action) {

  try 
  {
    const result = yield call(addPostAPI, action.data);

    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });

  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e,
    });
  }

}

function* watchAddPost() {

  yield takeLatest(ADD_POST_REQUEST, addPost);

}

export default function* postSaga() {

  yield all([
      fork(watchAddPost),
    ]);

  }