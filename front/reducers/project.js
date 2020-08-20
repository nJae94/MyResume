import produce from 'immer';

export const initialState = {
    Project:[],
    imagePaths : [],
    imageUploading : false,
    imageUploadDone : false,
    imageUploadFalse : null,
    addProjectLoading: false,
    addProjectDone: false,
    addProjectError: null,

}

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const LOAD_PROJECT_REQUEST = 'LOAD_PROJECT_REQUEST';
export const LOAD_PROJECT_SUCCESS = 'LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_FAILURE = 'LOAD_PROJECT_FAILURE';

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

              case ADD_PROJECT_REQUEST: {
                draft.addProjectLoading= true;
                draft.addProjectDone = false;
                draft.addProjectError = null;
              }

              case ADD_PROJECT_SUCCESS: {
                  draft.Project.unshift(action.data);
                  draft.addProjectLoading= false;
                  draft.addProjectDone = true;
                  draft.addProjectError = null;
              }
              case ADD_PROJECT_FAILURE: {
                  draft.addProjectError = action.error;
                  draft.addProjectLoading = false;
              }

              case LOAD_PROJECT_REQUEST: {
                break;
              }

              case LOAD_PROJECT_SUCCESS: {
                  
                action.data.forEach((d) => {
                    draft.followerList.push(d);
                  });

                  break;
              }
              case LOAD_PROJECT_FAILURE: {
                  break;
              }

            default:
                {break;}
        }
    });
    
}

export default reducer;
