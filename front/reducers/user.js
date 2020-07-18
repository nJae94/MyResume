import produce from 'immer';

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
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
                break;
            }
            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
              }
              case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                break;
              }
            default:
                {break;}
        }
    });

}

export default reducer;
