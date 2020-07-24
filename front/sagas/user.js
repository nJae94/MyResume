import { all, call, fork, put, takeEvery,takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS} from '../reducers/user'



// -----------회원가입부분-----------------------------------------------------------
function signUpAPI(signUpData) {
  
  console.log(signUpData);
  // 서버에 요청을 보내는 부분
  return axios.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    // yield call(signUpAPI);
    yield call(signUpAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) { // loginAPI 실패
    
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

// -----------로그인 부분-----------------------------------------------------------
function logInAPI(data) {
  
  return axios.post('/user/login', data);
}

function* logIn(action)
{

  try{
    
    const result = yield call(logInAPI, action.data);
    
    yield put({
      type:LOG_IN_SUCCESS,
      data: result.data,
    })

  }
  catch(e)
  {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

//------------------------------------------------로그아웃----------------------------------------------
function logOutAPI() {
  
  return axios.post('/user/logout');
}

function* logOut()
{

  try{
    
    yield call(logOutAPI);
    
    yield put({
      type:LOG_OUT_SUCCESS,
    })

  }
  catch(e)
  {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data
    })
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
      fork(watchSignUp),
      fork(watchLogIn),
      fork(watchLogOut),
    ]);
  }