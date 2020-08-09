import produce from 'immer';

export const initialState = {
    Project:[],
    imagePaths : null,
    imageUploading : false,
    imageUploadDone : false,
    imageUploadFalse : null,
}

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

const reducer = (state=initialState, action) => {
    return produce(state,(draft)=> {
        switch(action.type)
        {
            case UPLOAD_IMAGE_REQUEST: {
                draft.imageUploading = true;
                draft.imageUploadDone = false;
                draft.imageUploadFalse = null;
                break;
            }
            case UPLOAD_IMAGE_SUCCESS: {
                draft.imageUploading = false;
                draft.imageUploadDone = false;
                draft.imagePaths = action.data;
                break;
              }
              case UPLOAD_IMAGE_FAILURE: {
                draft.imageUploading = false;
                draft.imageUploadDone = false;
                draft.imageUploadFalse = action.error;
                break;
              }

            default:
                {break;}
        }
    });
    
}

export default reducer;
