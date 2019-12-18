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
        
        
        case 'LOGIN':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                userObject: action.payload.userObject,
            };

        case 'repLogin':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject,
            };
    
        case 'repPlatform':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject,
            };

        case 'add_success':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject,
            };

        case 'repRegister':
            return {
                ...state,
                errorMessage: '',
                token: action.payload,
            };

        case 'MERCHANT_LOGIN':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                merchantObject: action.payload.merchantObject,
            };
            

// ==== displaying ERRORS ==== start

        case 'ADD_ERROR':
                return {
                    ...state,
                    errorMessage: action.payload,
                };

        case 'CLEAR_ERRORS':
            return {
                ...state,
                errorMessage: '',
            };

// ==== displaying ERRORS ====== end


        case 'SET_CARD_OBJECT':
            return {
                ...state,
                cardObject: action.payload,
            };
        
        case 'SET_DEALS_ARRAY':
            return {
                ...state,
                dealsArray: action.payload,
            };

            

        case 'DISPLAY_POPUP_DEALS_MENU':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };



        case 'DISPLAY_POPUP_DEAL_CARD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'DISPLAY_POPUP_DEAL_CARD_QR':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };



        case 'DISPLAY_POPUP_PROFILE':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };        
        case 'DISPLAY_POPUP_PROFILE_CONFIRM_RESET_PASSWORD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
            
        case 'DISPLAY_POPUP_PROFILE_CANCEL_SUBSCRIPTION':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };



        case 'HIDE_POPUP_DEALS_MENU':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };

        case 'HIDE_POPUP_DEAL_CARD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
                
            };

        case 'HIDE_POPUP_PROFILE':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };

//  DEALS MENU ==================================================== start

        case 'SET_CATEGORY_ALCOHOL':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };

        case 'SET_CATEGORY_EVENTS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };        
        case 'SET_CATEGORY_FASHION':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_FOOD':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_HAIR':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_LIFESTYLE':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_TAXIS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_TECHNOLOGY':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };
        case 'SET_CATEGORY_ALL_DEALS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
            };

//  DEALS MENU ====================================================== end

        case 'LOG_OUT':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus,
                token: action.payload.token,
                errorMessage: action.payload.errorMessage,
                userObject: action.payload.userObject,
                repObject: action.payload.repObject,
            };
        

//  QR Code modifiers ============================================= start

        case 'SET_CAMERA_PERMISSION_TRUE':
            return {
                ...state,
                hasCameraPermission: action.payload.hasCameraPermission,
            };
        case 'SET_CAMERA_PERMISSION_FALSE':
                return {
                    ...state,
                    hasCameraPermission: action.payload.hasCameraPermission,
                };

        case 'SET_SCANNED_TRUE':
                return {
                    ...state,
                    scanned: action.payload.scanned,
                };
        case 'SET_SCANNED_FALSE':
            return {
                ...state,
                scanned: action.payload.scanned,
            };
        
        case 'VERIFY_QR_CODE':
            return {
                ...state,
                qrResult: action.payload.token,
            };

//  QR Code modifiers =============================================== end
        
        
        default:
            return state;
    };

};





// ACTIONS ====================================================================
// ACTIONS ====================================================================
// ACTIONS ====================================================================


const login = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/login', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        const userObject = jwt_decode(response.data.token);

        dispatch({ type: 'LOGIN', payload: {token: response.data.token, userObject} });

        navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'Something Is Wrong... Try Again!'});
    }

};



const cardObject = ( dispatch ) => ( dealObject ) => {

    try {
        dispatch({ type: 'SET_CARD_OBJECT', payload: dealObject });
    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'carObject =error='});
    }

};

const setDealsArray = ( dispatch ) => ( dealsArray ) => {

    try {
        dispatch({ type: 'SET_DEALS_ARRAY', payload: dealsArray });
    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'dealsArray =error='});
    }

};


// CLEAR ERROR s ===============================================
const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS', payload: '' });
// Clear ERROR s ===============================================
  


const resetPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/forgot', { email });

        navigate( 'ConfirmResetPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'Incorrect Email' });
    }

};


const resetRepPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/reps/forgot', { email } );

        // dispatch({ type: 'add_success', payload: `email sent successsfully to ${ email }` });

        navigate( 'ConfirmResetRepPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'Incorrect Email' });
    }

};


const repLogin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });

        // console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repLogin', payload: { token: response.data.token, repObject } });

        // console.log( repObject );

        navigate('RepPlatformScreen');

    } catch (err) {

        // console.log(err.message);

        dispatch({ type: 'ADD_ERROR', payload: `Incorrect Login Details` });
    }
    
};


const repPlatform = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/reps/login', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repPlatform', payload: { token: response.data.token, repObject } });

        navigate('ConfirmRepPlatformScreen');

    } catch (err) {

        dispatch({ type: 'ADD_ERROR', payload: 'RepPlatform =error='});
    }
    
};


const repRegister = (dispatch) => async ({ first, last, email, password, phone, university }) => {
        
    try {
        await trackerApi.post('/reps/register', { first, last, email, password, phone, university });
        const response = await trackerApi.post('/reps/login', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        const repObject = jwt_decode(response.data.token);

        dispatch({ type: 'repPlatform', payload: { token: response.data.token, repObject } });

        navigate('RepPlatformScreen');


    } catch (err) {

        dispatch({
            type: 'ADD_ERROR',
            payload: 'This email is already in use. Use another or press back to sign in.'
        });
        
    }

};


const merchantLogin = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/merchant/login', { email, password });

        // console.log(response.data);

        // await AsyncStorage.setItem('token', response.data.token);

        const merchantObject = jwt_decode(response.data.token);
        
        dispatch({ type: 'MERCHANT_LOGIN', payload: {token: response.data.token, merchantObject} });

        navigate('MerchantPlatformScreen');

    } catch (err) {

        // console.log(err.message);

        dispatch({ type: 'ADD_ERROR', payload: `Incorrect Merchant Details`});
    }
    
};


const verifyQRCode = (dispatch) => async ({ data, merchant }) => {

    try {
        const response = await trackerApi.post('/sale', { customerId: data, merchantId: merchant });

        // console.log(response.data);
        
        dispatch({ type: 'VERIFY_QR_CODE', payload: { token: response.data.qrResult } });

        // navigate('MerchantPlatformScreen');

    } catch (err) {

        // console.log(err.message);

        dispatch({ type: 'ADD_ERROR', payload: `Error QR Code Validation` });
    }

};



// DEALS MENU ====================================================== start

const displayPopUpDealsMenu = dispatch => () => {
    dispatch({
    type: 'DISPLAY_POPUP_DEALS_MENU',
    payload: { overlayType: "DealsMenu", overlayStatus: true }
    })
};
const setCategoryAlcohol = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_ALCOHOL',
        payload: {
            category: "Alcohol",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryEvents = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_EVENTS',
        payload: {
            category: "Events & Festivals",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryFashion = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_FASHION',
        payload: {
            category: "Fashion & Shopping",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryFood = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_FOOD',
        payload: {
            category: "Food & Drink",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryHair = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_HAIR',
        payload: {
            category: "Hair & Beauty",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryLifestyle = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_LIFESTYLE',
        payload: {
            category: "Lifestyle",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryTaxis = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_TAXIS',
        payload: {
            category: "Taxis & Cars",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryTechnology = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_TECHNOLOGY',
        payload: {
            category: "Technology",
            overlayType: "",
            overlayStatus: false,
        }
    });
};
const setCategoryAllDeals = dispatch => () => {
    dispatch({
        type: 'SET_CATEGORY_ALL_DEALS',
        payload: {
            category: "All Deals",
            overlayType: "",
            overlayStatus: false,
        }
    });
};

// DEALS MENU ====================================================== end

const LogOut = dispatch => () => {
    dispatch({
        type: 'LOG_OUT',
        payload: {
            overlayType: "",
            overlayStatus: false,
            token: null,
            errorMessage: '',
            userObject: {},
            repObject: {},
            merchantObject: {},
            deals: [],
        }
    });
    navigate('LoginScreen');
};

// QR Code modifiers ============================================= start

const setCameraPermissionTrue = dispatch => () => {
    dispatch({
        type: 'SET_CAMERA_PERMISSION_TRUE',
        payload: {
            hasCameraPermission: true,
        }
    });
};
const setCameraPermissionFalse = dispatch => () => {
    dispatch({
        type: 'SET_CAMERA_PERMISSION_FALSE',
        payload: {
            hasCameraPermission: false
        }
    });
};

const setScannedTrue = dispatch => () => {
    dispatch({
        type: 'SET_SCANNED_TRUE',
        payload: {
            scanned: true,
        }
    });
};
const setScannedFalse = dispatch => () => {
    dispatch({
        type: 'SET_SCANNED_FALSE',
        payload: {
            scanned: false,
        }
    });
};



// QR Code modifiers =============================================== end



const displayPopUpDealCard = dispatch => () => {
    dispatch({
        type: 'DISPLAY_POPUP_DEAL_CARD',
        payload: { overlayType: "DealCard", overlayStatus: true }
    })
};
const displayPopUpDealCardQR = dispatch => () => {
    dispatch({
        type: 'DISPLAY_POPUP_DEAL_CARD_QR',
        payload: { overlayType: "DealCardQR", overlayStatus: true }
    })
};
const displayPopUpProfile = dispatch => () => {
    dispatch({
        type: 'DISPLAY_POPUP_PROFILE',
        payload: { overlayType: "Profile", overlayStatus: true }

    })
};
const displayPopUpProfileConfirmResetPassword = dispatch => () => {
    dispatch({
        type: 'DISPLAY_POPUP_PROFILE_CONFIRM_RESET_PASSWORD',
        payload: { overlayType: "ProfileResetPassword", overlayStatus: true }

    })
};
const displayPopUpProfileCancelSubscription = dispatch => () => {
    dispatch({
        type: 'DISPLAY_POPUP_PROFILE_CANCEL_SUBSCRIPTION',
        payload: { overlayType: "ProfileCancelSubscription", overlayStatus: true }

    })
};



const hidePopUpDealsMenu = dispatch => () => {
    dispatch({
        type: 'HIDE_POPUP_DEALS_MENU',
        payload: { overlayType: "", overlayStatus: false }

    })
};
const hidePopUpDealCard = dispatch => () => {
    dispatch({
        type: 'HIDE_POPUP_DEAL_CARD',
        payload: { overlayType: "", overlayStatus: false }

    })
};
const hidePopUpProfile = dispatch => () => {
    dispatch({
        type: 'HIDE_POPUP_PROFILE',
        payload: { overlayType: "", overlayStatus: false }
    })
};



// EXPORT ==========================================================
// EXPORT ==========================================================
// EXPORT ==========================================================


export const { Provider, Context } = createDataContext(
    authReducer,
    {   
        login,
        resetPassword,

        repLogin,
        repRegister,
        repPlatform,
        resetRepPassword,

        merchantLogin,

        cardObject,
        setDealsArray,

        displayPopUpDealsMenu,
        hidePopUpDealsMenu,

        displayPopUpDealCard,
        hidePopUpDealCard,
        displayPopUpDealCardQR,

        displayPopUpProfile,
        hidePopUpProfile,
        displayPopUpProfileConfirmResetPassword,
        displayPopUpProfileCancelSubscription,

// DEALS MENU =============================================== start
        setCategoryAlcohol,
        setCategoryEvents,
        setCategoryFashion,
        setCategoryFood,
        setCategoryHair,
        setCategoryLifestyle,
        setCategoryTaxis,
        setCategoryTechnology,
        setCategoryAllDeals,

// DEALS MENU ================================================= end

        LogOut,

// QR Code component modifiers ============================== start

        setCameraPermissionTrue,
        setCameraPermissionFalse,
        
        setScannedTrue,
        setScannedFalse,
        
        verifyQRCode,

// QR Code component modifiers ================================ end

    },
    {   
        token: null,
        errorMessage: '',

        userObject: {},
        repObject: {},
        merchantObject: {},

        category: 'All Deals',

        dealsArray: [],

        overlayType: '',
        overlayStatus: false,


        // QR Code component state
        hasCameraPermission: true,
        scanned: false,
        qrResult: '',
    }

);