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
    
        case 'repPlatform':
            return {
                ...state,
                errorMessage: '',
                token: action.payload.token,
                repObject: action.payload.repObject
            };

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
        
        case 'SET_DEALS_ARRAY':
            return {
                ...state,
                dealsArray: action.payload
            };

            

        case 'DISPLAY_POPUP_DEALS_MENU':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus  
            };



        case 'DISPLAY_POPUP_DEAL_CARD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus  
            };
        case 'DISPLAY_POPUP_DEAL_CARD_QR':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus  
            };



        case 'DISPLAY_POPUP_PROFILE':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };        
        case 'DISPLAY_POPUP_PROFILE_CONFIRM_RESET_PASSWORD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
            
        case 'DISPLAY_POPUP_PROFILE_CANCEL_SUBSCRIPTION':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };



        case 'HIDE_POPUP_DEALS_MENU':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };

        case 'HIDE_POPUP_DEAL_CARD':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
                
            };

        case 'HIDE_POPUP_PROFILE':
            return {
                ...state,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };

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

        case 'SET_CATEGORY_ALCOHOL':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };

        case 'SET_CATEGORY_EVENTS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };        
        case 'SET_CATEGORY_FASHION':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_FOOD':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_HAIR':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_LIFESTYLE':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_TAXIS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_TECHNOLOGY':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        case 'SET_CATEGORY_ALL_DEALS':
            return {
                ...state,
                category: action.payload.category,
                overlayType: action.payload.overlayType,
                overlayStatus: action.payload.overlayStatus
            };
        
        default:
            return state;
    }

};


const login = (dispatch) => async ({ email, password }) => {
        
    try {
        const response = await trackerApi.post('/login', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        const userObject = jwt_decode(response.data.token);

        dispatch({ type: 'login', payload: {token: response.data.token, userObject} });

        navigate('DealsScreen');

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something Is Wrong... Try Again!'});
    }

};



const cardObject = ( dispatch ) => ( dealObject ) => {

    try {
        dispatch({ type: 'SET_CARD_OBJECT', payload: dealObject });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'carObject =error='});
    }

};

const setDealsArray = ( dispatch ) => ( dealsArray ) => {

    try {
        dispatch({ type: 'SET_DEALS_ARRAY', payload: dealsArray });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'dealsArray =error='});
    }

};


// CLEAR ERROR s ===============================================
// const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' });
  


const resetPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/forgot', { email });

        navigate( 'ConfirmResetPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Incorrect Email' });
    }

};


const resetRepPassword = (dispatch) => async ({ email }) => {
        
    try {
        await trackerApi.post('/reps/forgot', { email } );

        // dispatch({ type: 'add_success', payload: `email sent successsfully to ${ email }` });

        navigate( 'ConfirmResetRepPasswordScreen', { email } );

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Incorrect Email' });
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

        dispatch({ type: 'add_error', payload: `Incorrect Login Details` });
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

        dispatch({
            type: 'add_error',
            payload: 'This email is already in use. Use another or press back to sign in.'
        });
        
    }

};

const setCategory = dispatch => category => {
    dispatch({
        type: 'SET_CATEGORY',
        payload: "All Deals",
    });
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
            deals: [],
        }
    });
    navigate('LoginScreen');
};


// EXPORT ==========================================================
// EXPORT ==========================================================
// EXPORT ==========================================================


export const { Provider, Context } = createDataContext(
    authReducer,
    { login, resetPassword, repLogin, repRegister, repPlatform,
        resetRepPassword, setCategory, cardObject, setDealsArray,

        displayPopUpDealsMenu,
        hidePopUpDealsMenu,

        displayPopUpDealCard,
        hidePopUpDealCard,
        displayPopUpDealCardQR,

        displayPopUpProfile,
        hidePopUpProfile,
        displayPopUpProfileConfirmResetPassword,
        displayPopUpProfileCancelSubscription,

        setCategoryAlcohol,
        setCategoryEvents,
        setCategoryFashion,
        setCategoryFood,
        setCategoryHair,
        setCategoryLifestyle,
        setCategoryTaxis,
        setCategoryTechnology,
        setCategoryAllDeals,

        LogOut

    },
    {   
        token: null,
        errorMessage: '',

        userObject: {},
        repObject: {},

        category: "All Deals",

        dealsArray: [

            {
                "category": [
                  "Food & Drink",
                  "All Deals"
                ],
                "_id": "5dc445177c213e708d070177",
                "name": "Dominos",
                "img": "dominos.png",
                "gender": "both",
                "location": "Cathays, City Centre, Canton, Cardiff Bay, Ely, Llandaff, Maes Y Coe, Penarth, Pentwyn, Rumney Hill",
                "availability": "Sunday - Thursday: 50% Off Relates To Pizzas Only. All Other Menu Items Will Be Charged At Regular Menu Price. Offer Valid In Participating Stores Only.",
                "lineOne": "When You Spend £20 Or More Online VOUCHER CODE: OVERHERD",
                "lineTwo": "To Claim This Deal, You Will Need To Present Your Overheard Membership Upon Delivery",
                "lineThree": "",
                "logo": "img/logos/ciliegino-logo.png",
                "order": 0,
                "hoverid": "qwerty1",
                "mainOffer": "50% Off Pizzas",
                "offerSmall": "",
                "buttonText": "Buy Online",
                "online": true,
                "tags": "Food & Drink",
                "latitude": 51.4794623,
                "longitude": -3.1765643,
                "sales": 0,
                "link": ""
              },
              {
                "category": [
                  "Food & Drink",
                  "Lifestyle",
                  "All Deals",
                  "Alcohol"
                ],
                "_id": "5d28b2da7c213e5998eaf855",
                "name": "Walkabout",
                "img": "walkabout.jpg",
                "gender": "both",
                "location": "65-74 St Mary St, Cardiff CF10 1FA",
                "mainOffer": "5 Exclusive Deals",
                "offerSmall": "",
                "online": false,
                "lineOne": "20% Off, £2 Carling And Strongbow",
                "lineTwo": "Spirit And mixer £2: Vodka, Jack Daniels, Captain Morgan",
                "lineThree": "Jagerbombs 2 For £5",
                "buttonText": "Redeem In Store",
                "offline": "true",
                "order": 1,
                "availability": "Anytime During Opening Hours",
                "tags": "Food & Drink, Lifestyle",
                "latitude": 51.4768283,
                "longitude": -3.1792438,
                "sales": 0
              },
              {
                "category": [
                  "Health & Fitness",
                  "All Deals"
                ],
                "_id": "5d075742fb6fc00e79ab0a8b",
                "name": "Better Gym",
                "img": "better.png",
                "gender": "both",
                "location": "City Wide - Centres in Cardiff: Eastern, Fairwater, Llanishen, Maindy, Pentwyn, Star Hub and Western",
                "availability": "Anytime During Opening Hours",
                "lineOne": "£24 per Month",
                "lineTwo": "£199 per Year",
                "lineThree": "More Info: Visit better.org.uk/leisure-centre/cardiff or call 02920 529230",
                "mainOffer": "£61/Year Off Student Price",
                "offerSmall": "",
                "buttonText": "Redeem In Store",
                "longtext": true,
                "offline": "true",
                "order": 1,
                "tags": "Health & Fitness",
                "sales": 0
              },
              {
                "category": [
                  "Events & Festivals",
                  "All Deals"
                ],
                "_id": "5d8c657d7c213e55613680a9",
                "name": "Smack",
                "img": "smack.jpg",
                "gender": "both",
                "location": "",
                "lineOne": "£1 Off Entry",
                "lineTwo": "",
                "lineThree": "",
                "mainOffer": "£1 Off Entry",
                "offerSmall": "",
                "offline": "true",
                "buttonText": "Redeem At Door",
                "order": 2,
                "availability": "Anytime During Opening Hours",
                "redeemInstructions": "",
                "tags": "Events & Festivals"
              },
              {
                "category": [
                  "Events & Festivals",
                  "All Deals"
                ],
                "_id": "5d8c643f7c213e5561368059",
                "name": "QUIDZ Mondays",
                "img": "quidz.jpg",
                "gender": "both",
                "location": "",
                "lineOne": "£1 Entry",
                "lineTwo": "Redeem At The Door",
                "lineThree": "",
                "mainOffer": "£1 Entry",
                "offerSmall": "",
                "offline": "true",
                "buttonText": "Redeem At Door",
                "order": 3,
                "availability": "Anytime During Opening Hours",
                "tags": "Events & Festivals"
              },
              {
                "category": [
                  "Food & Drink",
                  "Lifestyle",
                  "All Deals"
                ],
                "_id": "5d136e97e7179a4e432a1c14",
                "name": "Steinbeck And Shaw",
                "img": "steinbeck.jpg",
                "lineOne": "50% Off Food",
                "lineTwo": "",
                "lineThree": "",
                "availability": "Friday & Saturday",
                "gender": "both",
                "location": "Greyfriars Rd, Cardiff CF10 3DP",
                "logo": "img/logos/ciliegino-logo.png",
                "order": 4,
                "buttonText": "Redeem In Store",
                "mainOffer": "50% Off Food",
                "offerSmall": "",
                "offline": "true",
                "tags": "Food & Drink, Lifestyle",
                "latitude": 51.4831917,
                "longitude": -3.17727,
                "sales": 0
              },
              {
                "category": [
                  "Fashion & Shopping",
                  "All Deals"
                ],
                "_id": "5d35c3927c213e5998ef9a0b",
                "name": "I Saw It First",
                "img": "i-saw-it-first.png",
                "gender": "both",
                "online": true,
                "location": "https://www.isawitfirst.com",
                "availability": "Anytime During Opening Hours",
                "lineOne": "50% Off",
                "lineTwo": "",
                "lineThree": "",
                "order": 5,
                "link": "https://www.isawitfirst.com",
                "ecommerceDeal": true,
                "redeemInstructions": "Enter 'over50' as a promo code at the checkout",
                "mainOffer": "50% Off",
                "offerSmall": "",
                "buttonText": "Buy Online",
                "tags": "Fashion & Shopping"
              },
              {
                "category": [
                  "Food & Drink",
                  "Lifestyle",
                  "All Deals",
                  "Alcohol"
                ],
                "_id": "5d14f0befb6fc00e79b1752b",
                "name": "Old Havana",
                "img": "old-havana.jpg",
                "gender": "both",
                "location": "6 High St, Cardiff, CF10 1AW",
                "availability": "Anytime During Opening Hours",
                "lineOne": "3 For £10 Bottled Beer",
                "lineTwo": "3 For 1 On Daiquiris And Mojitos",
                "lineThree": "2 For £12 Full-priced Cocktails",
                "buttonText": "Redeem In Store",
                "mainOffer": "3 For 1 Cocktails",
                "offline": "true",
                "offerSmall": "+ More",
                "longtext": true,
                "tags": "Food & Drink, Lifestyle",
                "order": 6,
                "latitude": 51.4809404,
                "longitude": -3.1823857,
                "sales": 0
              },
              {
                "category": [
                  "Events & Festivals",
                  "All Deals"
                ],
                "_id": "5cf79a34e7179a6896b19c14",
                "name": "Spring Break Amsterdam",
                "img": "sba-artwork.jpg",
                "gender": "both",
                "location": "Amsterdam",
                "logo": "img/logos/budafest-logo.png",
                "mainOffer": "£20 Off",
                "availability": "Tickets In Limited Supply",
                "ecommerceDeal": true,
                "link": "https://moree.springbreakamsterdam.co.uk/bookings/new",
                "offerSmall": "",
                "lineOne": "£20 Off Tickets",
                "lineTwo": "",
                "lineThree": "",
                "order": 7,
                "buttonText": "Buy Online",
                "modalId": "sbaModal",
                "tags": "Events & Festivals"
              },
              {
                "category": [
                  "Food & Drink",
                  "Lifestyle",
                  "All Deals"
                ],
                "_id": "5d6e00b4e7179a084ef784b7",
                "name": "Revolucion De Cuba",
                "img": "revolution.jpg",
                "gender": "both",
                "location": "",
                "availability": "Anytime During Opening Hours",
                "lineOne": "1 Free Coffee A Day",
                "lineTwo": "25% Off Main Plates",
                "lineThree": "3 Tapas Dishes For £10",
                "buttonText": "Redeem In Store",
                "mainOffer": "FREE COFFEE Every Day",
                "offline": "true",
                "offerSmall": "+ More",
                "longtext": true,
                "tags": "Food & Drink, Lifestyle",
                "order": 8,
                "latitude": 51.482783,
                "longitude": -3.180082,
                "sales": 0
              },
              {
                "category": [
                  "Fashion & Shopping",
                  "All Deals"
                ],
                "_id": "5d7bbee6e7179a084efce837",
                "name": "Judy's Affordable Vintage Fair",
                "img": "judy-vintage.jpg",
                "gender": "both",
                "tags": "Fashion & Shopping",
                "availability": "Anytime During Opening Hours",
                "location": "",
                "lineOne": "Free Entry with Card After 11am",
                "lineTwo": "Pre-register For First Hour (10-11am), With 25p Booking Fee",
                "lineThree": "Enter 'OVERHEARD' as a Promo Code at the Checkout",
                "mainOffer": "FREE ENTRY",
                "offerSmall": "",
                "longtext": true,
                "buttonText": "Buy Online",
                "order": 9,
                "redeemInstructions": "Enter 'OVERHEARD' as a promo code at the checkout",
                "link": "http://buytickets.at/thevintageclothingkilosale1/283909",
                "ecommerceDeal": true
              },
              {
                "category": [
                  "Events & Festivals",
                  "All Deals"
                ],
                "_id": "5d7eb266e7179a084efd8df8",
                "name": "Good Life",
                "img": "good-life.jpg",
                "gender": "both",
                "location": "",
                "lineOne": "30% Off Tickets",
                "lineTwo": "Tickets Coming Soon",
                "lineThree": "",
                "mainOffer": "30% Off Tickets",
                "offerSmall": "",
                "online": true,
                "ecommerceDeal": true,
                "buttonText": "Buy Online",
                "order": 10,
                "link": "https://www.residentadvisor.net/events/1304965?p=Overheard",
                "availability": "Tickets In Limited Supply",
                "redeemInstructions": "",
                "tags": "Events & Festivals"
              },
              {
                "category": [
                  "Events & Festivals",
                  "All Deals",
                  "Alcohol"
                ],
                "_id": "5d7eabc4e7179a084efd8cec",
                "name": "Vale Warehouse",
                "img": "vale-warehouse.png",
                "gender": "both",
                "location": "",
                "mainOffer": "4 For £10 Spirit & Mixer",
                "offerSmall": "+ More",
                "lineOne": "4 For a £10 On Jägermeister, Sambuca And Tequila",
                "lineTwo": "3 For £10 On Cans Of Lager And Cider",
                "lineThree": "£14 pitchers On Lager And Cider",
                "buttonText": "Redeem In Store",
                "order": 11,
                "link": "",
                "redeemInstructions": "",
                "availability": "Any Time During Opening Hours",
                "tags": "Events & Festivals",
                "sales": 0
              }

        ],

        overlayType: "",
        overlayStatus: false,

    }

);