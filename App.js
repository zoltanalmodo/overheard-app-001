import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import DealsScreen from './src/screens/DealsScreen/DealsScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RecoverPasswordScreen from './src/screens/RecoverPasswordScreen/RecoverPasswordScreen';
import RepSignUpScreen from './src/screens/RepSignUpScreen/RepSignUpScreen';
import RepLoginScreen from './src/screens/RepLoginScreen/RepLoginScreen';
import RepPlatformScreen from './src/screens/RepPlatformScreen/RepPlatformScreen';
import RepPlatformConfirmScreen from './src/screens/RepPlatformConfirmScreen/RepPlatformConfirmScreen';


import DealBuyOnlineScreen from './src/screens/DealBuyOnlineScreen/DealBuyOnlineScreen';
import DealsBuyInStoreScreen from './src/screens/DealsBuyInStoreScreen/DealsBuyInStoreScreen';
import DealsQRCodeScreen from './src/screens/DealsQRCodeScreen/DealsQRCodeScreen';

import MapUserCenteredScreen from './src/screens/MapUserCenteredScreen/MapUserCenteredScreen';
import MapDealCenteredScreen from './src/screens/MapDealCenteredScreen/MapDealCenteredScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ProfileWarningScreen from './src/screens/ProfileWarningScreen/ProfileWarningScreen';

import RecoverPasswordConfirmScreen from './src/screens/RecoverPasswordConfirmScreen/RecoverPasswordConfirmScreen';


//===========================================test
import DealsListTest from './src/screens/TestTest/DealsListTest.js'
//===========================================test


import { Provider as AuthProvider } from './src/context/AuthContext';



const switchNavigator = createSwitchNavigator ({

    loginFlow: createStackNavigator({

      // LoadingScreen: LoadingScreen,

      //===========================================test

      // BottomDrawerTest: BottomDrawerTest,

      // DealsListTest: DealsListTest,

      //===========================================test

      //==========================================build



      // DealBuyOnlineScreen: DealBuyOnlineScreen,

      //==========================================build
      

      LoginScreen: LoginScreen,
      RecoverPasswordScreen: RecoverPasswordScreen,
      
      RepLoginScreen: RepLoginScreen,
      RepSignUpScreen: RepSignUpScreen,
      RepPlatformScreen: RepPlatformScreen,

    }),

    mainFlow: createSwitchNavigator({
        
      DealsScreen: DealsScreen,
      
      DealBuyOnlineScreen: DealBuyOnlineScreen,
      DealsBuyInStoreScreen: DealsBuyInStoreScreen,
      DealsQRCodeScreen: DealsQRCodeScreen,

      MapUserCenteredScreen: MapUserCenteredScreen,
      MapDealCenteredScreen: MapDealCenteredScreen,

      ProfileScreen: ProfileScreen,
      ProfileWarningScreen: ProfileWarningScreen,

      RecoverPasswordConfirmScreen: RecoverPasswordConfirmScreen,
      RepPlatformConfirmScreen: RepPlatformConfirmScreen,

    })

  });
 
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

