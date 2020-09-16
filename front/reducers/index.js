import {combineReducers} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import user from './user';
import post from './post';
import project from './project'

const rootReducer = (state, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return action.payload;
      default: {
        const combinedReducer = combineReducers({
          user,
          post,
          project,
        });
        return combinedReducer(state, action);
      }
    }
  };
  
  export default rootReducer;