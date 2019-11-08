import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import jwt_decode from 'jwt-decode';


// const userToken = await axios.post('http://127.0.0.1:8080/api/login', {email: 'sachin.patel@hotmail.co.uk', password: 'Sachin1992'});
//     console.log('REGULAR USER TOKEN:', userToken.data);
//     const userDecodedToken = jwt_decode(userToken.data.token);
//     console.log('REGULAR USER DETAILS:', userDecodedToken);
    
//     const RepToken = await axios.post('http://127.0.0.1:8080/api/reps/login', {email: 'sachin.patel@hotmail.co.uk', password: 'Hello123'});
//     console.log('REP TOKEN:', RepToken.data);
//     const repDecodedToken = jwt_decode(RepToken.data.token);
//     console.log('REP DETAILS:', repDecodedToken);



const authReducer = (state, action) => {

    switch (action.type) {
        
        case 'add_error':
            return {
                ...state,
                errorMessage:
                action.payload
            };

        case 'login':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                userObject: action.payload.userObject
            };

    
        case 'repLogin':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject
            };

        // === OK ===

    
        case 'repPlatform':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject
            };
        // === OK ===


        case 'add_success':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject
            };


        case 'repRegister':
            return {
                ...state,
                errorMessage: '',
                token: action.payload
            };

        case 'CLEAR_ERRORS':
            return {
                ...state,
                errorMessage: ''
            };

        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            };

        case 'SET_CARD_OBJECT':
            return {
                ...state,
                cardObject: action.payload
            };

        case 'TOGGLE_PROFILE':
                return {
                    ...state,
                    diplayProfilePanel: Boolean(!state.displayProfilePanel)
                };

        default:
            return state;
    }

};


const login = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/login', { email, password });

        // console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const userObject = jwt_decode(response.data.token); //same logic for the RepLoginScreen === const repObject = jwt

        dispatch({ type: 'login', payload: {token: response.data.token, userObject} });

        navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something is wrong... Try again!'});
    }

};


// // cardObject === start ===

// const cardObject = dispatch => category => {
//     dispatch({
//         type: 'SET_CATEGORY',
//     payload: category
//     });
// };


const cardObject = ( dispatch ) => ( dealObject ) => {

    try {
        
        dispatch({ type: 'SET_CARD_OBJECT', payload: dealObject });

        // navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'carObject =error='});
    }

};


// ERROR ===
// const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' });
  


const resetPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/forgot', { email });

        navigate( 'ConfirmResetPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'No account with that email' });
    }

};


const resetRepPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/reps/forgot', { email } );

        // dispatch({ type: 'add_success', payload: `email sent successsfully to ${ email }` });

        navigate( 'ConfirmResetRepPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'ResetRepPasswordScreen =error=' });
    }

};


const repLogin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });

        console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repLogin', payload: { token: response.data.token, repObject } });

        // console.log( repObject );

        navigate('RepPlatformScreen');

    } catch (err) {

        // console.log(err.message);

        dispatch({ type: 'add_error', payload: `it’s not funny!` });
    }
    
};


const repPlatform = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });

        // console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repPlatform', payload: { token: response.data.token, repObject } });

        // console.log( repObject );  // +++OK+++

        navigate('ConfirmRepPlatformScreen');

        // *** COPY UNIQUE REP LINK ***  >>> to >>>  < Operation System Clipboard > !!!  

    } catch (err) {

        console.log(err.message);

        dispatch({ type: 'add_error', payload: 'RepPlatform =error='});
    }
    
};


const repRegister = (dispatch) => async ({ first, last, email, password, phone, university }) => {
        
    try {
        await trackerApi.post('/reps/register', { first, last, email, password, phone, university });
        const response = await trackerApi.post('/reps/login', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repPlatform', payload: { token: response.data.token, repObject } });

        // console.log( repObject )

        navigate('RepPlatformScreen');


    } catch (err) {

        dispatch({ type: 'add_error', payload: 'This email is already in use. Use another or press back to sign in.'});
        
    }

};



const signOut = (dispatch) => {
    return () => {

        // sign out !
    }; 
};

const setCategory = dispatch => category => {
    dispatch({
        type: 'SET_CATEGORY',
        payload: category
    });
};

const displayProfile = dispatch => () => {
    dispatch({
        type: 'TOGGLE_PROFILE',

    })
}


export const { Provider, Context } = createDataContext(
    authReducer,
    { login, resetPassword, repLogin, signOut, repRegister, repPlatform, resetRepPassword, setCategory, cardObject, displayProfile },
    { token: null, errorMessage: '', userObject: {}, repObject: {} }

);