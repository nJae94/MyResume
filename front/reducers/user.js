import produce from 'immer';

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '',
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';


const reducer = (state=initialState, action) => {
    
    return produce(state,(draft)=> {
        switch(action.type)
        {
            case SIGN_UP_REQUEST: {
                draft.isSignedUp =false;
                draft.isSigningUp = true;
                draft.signUpErrorReason = '';
                break;
            }
            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                draft.signUpErrorReason = '';
                break;
              }
              case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.signUpErrorReason = action.error;
                
                break;
              }
            default:
                {break;}
        }
    });

}

export default reducer;
