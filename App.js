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

import MerchantLoginScreen from './src/screens/MerchantLoginScreen/MerchantLoginScreen';

import DealsScreen from './src/screens/DealsScreen/DealsScreen';

import MapUserCenteredScreen from './src/screens/MapUserCenteredScreen/MapUserCenteredScreen';
import MapDealCenteredScreen from './src/screens/MapDealCenteredScreen/MapDealCenteredScreen';

import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ProfileWarningScreen from './src/screens/ProfileWarningScreen/ProfileWarningScreen';

import MerchantPlatformScreen from './src/screens/MerchantPlatformScreen/MerchantPlatformScreen';



//===========================================test


import ReactNativeSnapCarousel from './src/components/ReactNativeSnapCarousel/ReactNativeSnapCarousel'

import ReactNativeModalOverlay from './src/screens/TestTest/ReactNativeModalOverlay'

import BarcodeScannerFunctional from './src/screens/TestTest/BarcodeScannerFunctional'

//===========================================test


import { Provider as AuthProvider } from './src/context/AuthContext';


const switchNavigator = createSwitchNavigator ({

    loginFlow: createStackNavigator({

      //===========================================test


      
      // ReactNativeSnapCarousel: ReactNativeSnapCarousel,

      // ReactNativeModalOverlay: ReactNativeModalOverlay,

      // ProfileScreen: ProfileScreen,
      
      BarcodeScannerFunctional: BarcodeScannerFunctional,



      //===========================================test

      //==========================================build

      // ProfileScreen: ProfileScreen,

      // DealsScreen: DealsScreen,

      // MerchantLoginScreen: MerchantLoginScreen,
    
      //==========================================build
      
      LoginScreen: LoginScreen,
      ResetPasswordScreen: ResetPasswordScreen,
      RepLoginScreen: RepLoginScreen,
      ResetRepPasswordScreen: ResetRepPasswordScreen,
      RepSignUpScreen: RepSignUpScreen,                              
      
      RepPlatformScreen: RepPlatformScreen,

      MerchantLoginScreen: MerchantLoginScreen,
      MerchantPlatformScreen: MerchantPlatformScreen,
      
    }),
    

    mainFlow: createSwitchNavigator({
        
      DealsScreen: DealsScreen,

      MapUserCenteredScreen: MapUserCenteredScreen,
      MapDealCenteredScreen: MapDealCenteredScreen,

      ProfileScreen: ProfileScreen,
      ProfileWarningScreen: ProfileWarningScreen,

      ConfirmResetPasswordScreen: ConfirmResetPasswordScreen,
      ConfirmResetRepPasswordScreen: ConfirmResetRepPasswordScreen,
      
      ConfirmRepPlatformScreen: ConfirmRepPlatformScreen,

      BarcodeScannerFunctional: BarcodeScannerFunctional,
      
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



