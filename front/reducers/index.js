import {combineReducers} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import user from './user';
import post from './post';
import project from './project'

const rootReducer = combineReducers({
    
    // index:(state = {}, action) => {
    //     switch (action.type) {
    //         case HYDRATE:
    //             console.log('HYDRATE', action);

    //             return {...state, ...action.payload};
    //     }
    // },
    user,
    post,
    project,
});

export default rootReducer;