import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const signin = (dispatch) => {
    return ({ email, password }) => {
        // make API request to signin with email and password

        // success => update the state...

        // if signup fails => display an error message
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
    { isSignedIn: false }

);