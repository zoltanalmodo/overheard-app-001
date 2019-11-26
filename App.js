import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';



import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen/ResetPasswordScreen';
import ConfirmResetPasswordScreen from './src/screens/ConfirmResetPasswordScreen/ConfirmResetPasswordScreen';


import RepLoginScreen from './src/screens/RepLoginScreen/RepLoginScreen';
import ResetRepPasswordScreen from './src/screens/ResetRepPasswordScreen/ResetRepPasswordScreen';
import ConfirmResetRepPasswordScreen from './src/screens/ConfirmResetRepPasswordScreen/ConfirmResetRepPasswordScreen'


import RepSignUpScreen from './src/screens/RepSignUpScreen/RepSignUpScreen';
import RepPlatformScreen from './src/screens/RepPlatformScreen/RepPlatformScreen';
import ConfirmRepPlatformScreen from './src/screens/ConfirmRepPlatformScreen/ConfirmRepPlatformScreen';


import DealsScreen from './src/screens/DealsScreen/DealsScreen';


import DealCardPopUpScreen from './src/screens/DealCardPopUpScreen/DealCardPopUpScreen';



import MapUserCenteredScreen from './src/screens/MapUserCenteredScreen/MapUserCenteredScreen';
import MapDealCenteredScreen from './src/screens/MapDealCenteredScreen/MapDealCenteredScreen';

import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ProfileWarningScreen from './src/screens/ProfileWarningScreen/ProfileWarningScreen';
import DealCardQRPopUpScreen from './src/screens/DealCardQRPopUpScreen/DealCardQRPopUpScreen';
import ConfirmProfileResetPasswordScreen from './src/screens/ConfirmProfileResetPasswordScreen/ConfirmProfileResetPasswordScreen';

//===========================================test

import ReactNativeCarouselControl from './src/screens/TestTest/ReactNativeCarouselControl'
import ReactNativeLoopedCarousel from './src/screens/TestTest/ReactNativeLoopedCarousel'
import ReactNativeAnchorCarousel from './src/screens/TestTest/ReactNativeAnchorCarousel'
import ReactNativeSnapCarousel2222 from './src/screens/TestTest/ReactNativeSnapCarousel2222'

import ReactNativeModalOverlay from './src/screens/TestTest/ReactNativeModalOverlay'
import ReactNativeModalOverlayStateless from './src/screens/TestTest/ReactNativeModalOverlayStateless'




//===========================================test


import { Provider as AuthProvider } from './src/context/AuthContext';



const switchNavigator = createSwitchNavigator ({

    loginFlow: createStackNavigator({

      //===========================================test

      

      // ReactNativeSnapCarousel2222: ReactNativeSnapCarousel2222,
      
      // ReactNativeModalOverlay: ReactNativeModalOverlay,

            
      // ReactNativeModalOverlayStateless: ReactNativeModalOverlayStateless,

      // ProfileScreen: ProfileScreen,


      //===========================================test

      //==========================================build

      
      DealsScreen: DealsScreen,
      

      //==========================================build
      

      LoginScreen: LoginScreen,
      ResetPasswordScreen: ResetPasswordScreen,
      RepLoginScreen: RepLoginScreen,
      ResetRepPasswordScreen: ResetRepPasswordScreen,
      RepSignUpScreen: RepSignUpScreen,                              
      
      RepPlatformScreen: RepPlatformScreen,
      
    }),

    mainFlow: createSwitchNavigator({
        
      DealsScreen: DealsScreen,
      
      DealCardPopUpScreen: DealCardPopUpScreen,
      DealCardQRPopUpScreen: DealCardQRPopUpScreen,

      MapUserCenteredScreen: MapUserCenteredScreen,
      MapDealCenteredScreen: MapDealCenteredScreen,

      ProfileScreen: ProfileScreen,
      ProfileWarningScreen: ProfileWarningScreen,


      ConfirmResetPasswordScreen: ConfirmResetPasswordScreen,
      ConfirmResetRepPasswordScreen: ConfirmResetRepPasswordScreen,
      ConfirmProfileResetPasswordScreen: ConfirmProfileResetPasswordScreen,
      
      ConfirmRepPlatformScreen: ConfirmRepPlatformScreen,

      
    })

  });
 
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </AuthProvider>
  );
};


//*********************** ALMODO SOFTWARE *************************//

