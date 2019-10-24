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
        case 'replogin':
            return { ...state, errorMessage: '', token: action.payload };
        default:
            return state;
    }
};


const signin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/login', { email, password });

        // console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const userObject = jwt_decode(response.data.token)

        dispatch({ type: 'login', payload: {token: response.data.token, userObject} });

        navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something is wrong... Try again!'})
    }

};


const resetPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/forgot', { email });

        // dispatch({ type: 'add_success', payload: `email sent successsfully to ${ email }` });

        navigate('ConfirmResetPasswordScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: `there is no account associated with the email address: ${email}. Please ensure you have typed it in correctly.`})
    }

};


const repsignin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'replogin', payload: response.data.token });

        navigate('RepPlatformScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something is wrong... Try again!'})
    }

};


const signout = (dispatch) => {
    return () => {

        // sign out !
    }; 
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        
        try {
            const response = await trackerApi.post('/reps/register', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }; 
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, resetPassword, repsignin, signout, signup },
    { token: null, errorMessage: '', userObject: {} }

);