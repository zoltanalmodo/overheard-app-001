import createDataContext from './createDataContext';

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
    return ({ email, password }) => {
        // make API request to signup with email and password

        // if we signup, modify the state, say we are authenticated

        // if signup fails we want to display an error message
    }; 
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }

);