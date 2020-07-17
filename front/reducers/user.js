import produce from 'immer';

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
}

const reducer = (state=initialState, action) => {
    
    return produce(state,(draft)=> {
        switch(action.type)
        {

            default:
                {break;}
        }
    });

}

export default reducer;
