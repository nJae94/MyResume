import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_FAILURE, ADD_POST_SUCCESS, LOAD_POST_REQUEST, LOAD_POST_FAILURE, LOAD_POST_SUCCESS } from '../reducers/post';
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

//-----------------------------------------------------------------방명록 등록----------------------------------------------------------

function loadPostAPI(offset = 0, limit = 10) {

  return axios.get(`/post/posts?off=${offset}&limit=${limit}`);
}

function* loadPost(action) {

  try 
  {
    const result = yield call(loadPostAPI, action.data);

    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });

  } catch (e) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: e,
    });
  }

}

function* watchLoadPost() {

  yield takeLatest(LOAD_POST_REQUEST, loadPost);

}

export default function* postSaga() {

  yield all([
      fork(watchAddPost),
      fork(watchLoadPost),
    ]);

  }