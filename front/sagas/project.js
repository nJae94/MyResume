import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
      UPLOAD_IMAGE_REQUEST,
      UPLOAD_IMAGE_FAILURE,
      UPLOAD_IMAGE_SUCCESS,
      ADD_PROJECT_FAILURE,
      ADD_PROJECT_SUCCESS,
      ADD_PROJECT_REQUEST,
      LOAD_PROJECT_REQUEST,
      LOAD_PROJECT_SUCCESS,
      LOAD_PROJECT_FAILURE
    } from '../reducers/project';


function UploadImageAPI(data) {

    return axios.post('/project/images', data);
  }
  
  function* UploadImage(action)
  {
  
    try{
      
      const result = yield call(UploadImageAPI, action.data);
      
      yield put({
        type:UPLOAD_IMAGE_SUCCESS,
        data: result.data,
      });
  
    }
    catch(e)
    {
      yield put({
        type: UPLOAD_IMAGE_FAILURE,
        error: e.response.data
      });
    }
  }
  
  function* watchUploadImage() {
    yield takeLatest(UPLOAD_IMAGE_REQUEST, UploadImage);
  }

//----------------------------------------------------------------------------------------------이미지 업로드----------------------------------------------------------------------------------------------------

function UploadProjectAPI(data) {

  return axios.post('/project/', data);
}

function* UploadProject(action)
{

  try{
    
    const result = yield call(UploadProjectAPI, action.data);
    
    yield put({
      type:ADD_PROJECT_SUCCESS,
      data: result.data,
    });

  }
  catch(e)
  {
    yield put({
      type: ADD_PROJECT_FAILURE,
      error: e.response.data
    });
  }
}

function* watchUploadProject() {
  yield takeLatest(ADD_PROJECT_REQUEST, UploadProject);
}

//----------------------------------------------------------------------------------------------프로젝트 업로드-----------------------------------------------------------------------------------------------------

function LoadProjectAPI(userId) {

  return axios.get(`/project/${userId}`, {
    withCredentials: true,
  });
}

function* LoadProject(action)
{

  try{
    
    const result = yield call(LoadProjectAPI, action.data);
    
    yield put({
      type:LOAD_PROJECT_SUCCESS,
      data: result.data,
    });

  }
  catch(e)
  {
    yield put({
      type: LOAD_PROJECT_FAILURE,
      error: e.response.data
    });
  }
}

function* watchLoadProject() {
  yield takeLatest(LOAD_PROJECT_REQUEST, LoadProject);
}

export default function* projectSaga() {
    
    yield all([
        fork(watchUploadImage),
        fork(watchUploadProject),
        fork(watchLoadProject),
    ]);
  }