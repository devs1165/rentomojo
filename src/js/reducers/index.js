import { combineReducers } from 'redux';
import blog from './blogReducer';
import persistState from 'redux-localstorage';

const appReducer = combineReducers({
    blog
})

const rootReducer = ( state, action ) => {
    // if( action.type === "USER_LOGOUT" ) {
    //     // Object.keys(state).forEach(key => {
    //     //     persistState.removeItem(`persist:${key}`);
    //     // });
    //     state = undefined;
    // }
        
    return appReducer(state, action)
}

export default rootReducer;