import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';


import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';

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

import DealBuyOnlineScreen from './src/screens/DealBuyOnlineScreen/DealBuyOnlineScreen';
import DealsBuyInStoreScreen from './src/screens/DealsBuyInStoreScreen/DealsBuyInStoreScreen';
import DealsQRCodeScreen from './src/screens/DealsQRCodeScreen/DealsQRCodeScreen';

import MapUserCenteredScreen from './src/screens/MapUserCenteredScreen/MapUserCenteredScreen';
import MapDealCenteredScreen from './src/screens/MapDealCenteredScreen/MapDealCenteredScreen';

import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ProfileWarningScreen from './src/screens/ProfileWarningScreen/ProfileWarningScreen';



//===========================================test

//===========================================test


import { Provider as AuthProvider } from './src/context/AuthContext';



const switchNavigator = createSwitchNavigator ({

    loginFlow: createStackNavigator({

      // LoadingScreen: LoadingScreen,

      //===========================================test

      

      //===========================================test

      //==========================================build

      

      //==========================================build
      

      // LoginScreen: LoginScreen,
      // ResetPasswordScreen: ResetPasswordScreen,
      
      RepLoginScreen: RepLoginScreen,
      ResetRepPasswordScreen: ResetRepPasswordScreen,
      
      RepSignUpScreen: RepSignUpScreen,                                  // ERROR !!!
      
      RepPlatformScreen: RepPlatformScreen,

    }),

    mainFlow: createSwitchNavigator({
        
      DealsScreen: DealsScreen,
      
      DealCardPopUpScreen: DealCardPopUpScreen,

      DealBuyOnlineScreen: DealBuyOnlineScreen,
      DealsBuyInStoreScreen: DealsBuyInStoreScreen,
      DealsQRCodeScreen: DealsQRCodeScreen,

      MapUserCenteredScreen: MapUserCenteredScreen,
      MapDealCenteredScreen: MapDealCenteredScreen,

      ProfileScreen: ProfileScreen,
      ProfileWarningScreen: ProfileWarningScreen,

      ConfirmResetPasswordScreen: ConfirmResetPasswordScreen,
      

      ConfirmResetRepPasswordScreen: ConfirmResetRepPasswordScreen,
      
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

