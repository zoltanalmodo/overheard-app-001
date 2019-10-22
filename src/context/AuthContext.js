import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'login':
            return { errorMessage: '', token: action.payload }
        case 'replogin':
            return { errorMessage: '', reptoken: action.payload }
        default:
            return state;
    }
};


const signin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/login', { email, password });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'login', payload: response.data.token });

        navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something is wrong... Try again!'})
    }

};


const repsignin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/replogin', { email, password });
        console.log(response.data);
        await AsyncStorage.setItem('token', response.data.reptoken);
        dispatch({ type: 'replogin', payload: response.data.reptoken });

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
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }; 
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, repsignin, signout, signup },
    { token: null, errorMessage: '' }

);