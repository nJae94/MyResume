import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
      UPLOAD_IMAGE_REQUEST,
      UPLOAD_IMAGE_FAILURE,
      UPLOAD_IMAGE_SUCCESS 
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

export default function* projectSaga() {
    
    yield all([
        fork(watchUploadImage),
    ]);
  }