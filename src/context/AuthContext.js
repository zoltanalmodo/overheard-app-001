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
            return { ...state, errorMessage: action.payload };
        case 'login':
            return { ...state, errorMessage: '', token: action.payload.token, userObject: action.payload.userObject };
        case 'repLogIn':
            return { ...state, errorMessage: '', token: action.payload.token, repObject: action.payload.repObject };
        case 'repRegister':
            return { ...state, errorMessage: '', token: action.payload };
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


const resetPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/forgot', { email });

        // dispatch({ type: 'add_success', payload: `email sent successsfully to ${ email }` });

        navigate( 'ConfirmResetPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'No Account with that email' });
    }

};


const repLogin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });

        console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'login', payload: { token: response.data.token, repObject } });

        console.log( repObject );  // OK !!!

        navigate('RepPlatformScreen');

    } catch (err) {

        console.log(err.message);

        dispatch({ type: 'add_error', payload: 'Say something funny!'});
    }
    
};



const repRegister = (dispatch) => async ({ first, last, email, password, phone, university }) => {
        
    try {
        const response = await trackerApi.post('/reps/register', { first, last, email, password, phone, university });

        // console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({ type: 'repRegister', payload: response.data.token });

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



export const { Provider, Context } = createDataContext(
    authReducer,
    { login, resetPassword, repLogin, signOut, repRegister },
    { token: null, errorMessage: '', userObject: {} }

);