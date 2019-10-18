import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
};


const signin = (dispatch) => {
    return async ({ email, password }) => {
        
        try {
            const response = await trackerApi.post('/login', { email, password });
            console.log(response.data);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something is wrong... Try again!'})
        }

    }; 
};

const signout = (dispatch) => {
    return () => {

        // sign out !
    }; 
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }; 
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '' }

);