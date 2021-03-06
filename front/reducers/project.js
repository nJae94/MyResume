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
    loadProjectDone : false,
    loadProjectError : null,
    singleProject : null,
    loadSingleProjectDone : false,
    loadSingleProjectError : null,
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

export const LOAD_PROJECT_SINGLE_REQUEST = 'LOAD_PROJECT_SINGLE_REQUEST'
export const LOAD_PROJECT_SINGLE_SUCCESS = 'LOAD_PROJECT_SINGLE_SUCCESS'
export const LOAD_PROJECT_SINGLE_FAILURE = 'LOAD_PROJECT_SINGLE_FAILURE'

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
                break;
              }

              case ADD_PROJECT_SUCCESS: {
                  draft.Project.unshift(action.data);
                  draft.addProjectLoading= false;
                  draft.addProjectDone = true;
                  draft.addProjectError = null;
                  break;
              }
              case ADD_PROJECT_FAILURE: {
                  draft.addProjectError = action.error;
                  draft.addProjectDone = false;
                  draft.addProjectLoading = false;
                  break;
              }

              case LOAD_PROJECT_REQUEST: {
                  draft.loadProjectDone = false;
                  draft.Project = [];
                break;
              }

              case LOAD_PROJECT_SUCCESS: {
                  
                action.data.forEach((d) => {
                    draft.Project.push(d);
                  });
                  draft.loadProjectDone = true;
                  draft.loadProjectError = null;
                  break;
              }
              case LOAD_PROJECT_FAILURE: {
                  draft.loadProjectError = action.error;
                  break;
              }

              case LOAD_PROJECT_SINGLE_REQUEST: {
                draft.loadSingleProjectDone = false;
                draft.singleProject = null;
                break;
            }

            case LOAD_PROJECT_SINGLE_SUCCESS: {
                
                draft.singleProject = action.data;
                draft.loadSingleProjectDone = true;
                draft.loadSingleProjectError = null;
                break;
            }
            case LOAD_PROJECT_SINGLE_FAILURE: {
                draft.loadSingleProjectError = action.error;
                break;
            }


            default:
                {break;}
        }
    });
    
}

export default reducer;
