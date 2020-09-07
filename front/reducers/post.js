import produce from 'immer';

export const initialState = {
    mainPosts:[],
    postLoading: false,
    postDone: false,
    postError : null,
    LoadPostLoding: false,
    LoadPostDone: false,
    LoadError: null,

}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

const reducer = (state=initialState, action) => {

    return produce(state,(draft)=> {
        switch(action.type)
        {

            case ADD_POST_REQUEST: 
            {
                draft.postLoading= true;
                draft.postError= null;
                break;
            }
            case ADD_POST_SUCCESS:
                {
                    draft.postLoading= false;
                    draft.postDone=true;
                    draft.mainPosts.unshift(action.data);
                }
            case ADD_POST_FAILURE:
                {
                    draft.postLoading= false;
                    draft.postError = action.error;
                }

            case LOAD_POST_REQUEST:
            {
                draft.LoadPostLoding = true;
                draft.LoadError = null;
            }

            case LOAD_POST_SUCCESS: {
                draft.LoadPostLoding = false;
                draft.mainPosts = action.data;
            }
            case LOAD_POST_FAILURE : {
                draft.LoadPostLoding = false;
                draft.LoadError = action.error;
            }

            default:
                {break;}
        }
    });
    
}

export default reducer;
