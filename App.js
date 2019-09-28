import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import DealsScreen from './src/screens/DealsScreen/DealsScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen/ResetPasswordScreen';
import RepSignUpScreen from './src/screens/RepSignUpScreen/RepSignUpScreen';
import RepLoginScreen from './src/screens/RepLoginScreen/RepLoginScreen';
import RepPlatformScreen from './src/screens/RepPlatformScreen/RepPlatformScreen';
import DealBuyOnlineScreen from './src/screens/DealBuyOnlineScreen/DealBuyOnlineScreen';
import DealsBuyInStoreScreen from './src/screens/DealsBuyInStoreScreen/DealsBuyInStoreScreen';
import DealsQRCodeScreen from './src/screens/DealsQRCodeScreen/DealsQRCodeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import MapUserCenteredScreen from './src/screens/MapUserCenteredScreen/MapUserCenteredScreen';
import MapDealCenteredScreen from './src/screens/MapDealCenteredScreen/MapDealCenteredScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ProfileWarningScreen from './src/screens/ProfileWarningScreen/ProfileWarningScreen';


// import * as Font from 'expo-font';

// export default class App extends React.Component {

//   state = {
//     fontLoaded: false,
//   };

//   async componentDidMount() {
//     await Font.loadAsync({
//       'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
//       'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     });

//     this.setState({ fontLoaded: true });
//   }

//   // ...
// }


const navigator = createStackNavigator (
  {
  DealsScreen: DealsScreen,
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  ResetPasswordScreen: ResetPasswordScreen,
  RepSignUpScreen: RepSignUpScreen,
  RepLoginScreen: RepLoginScreen,
  RepPlatformScreen: RepPlatformScreen,
  DealBuyOnlineScreen: DealBuyOnlineScreen,
  DealsBuyInStoreScreen: DealsBuyInStoreScreen,
  DealsQRCodeScreen: DealsQRCodeScreen,
  CategoriesScreen: CategoriesScreen,
  MapUserCenteredScreen: MapUserCenteredScreen,
  MapDealCenteredScreen: MapDealCenteredScreen,
  ProfileScreen: ProfileScreen,
  ProfileWarningScreen: ProfileWarningScreen,
  },
{
  initialRouteName: 'ProfileWarningScreen',
  defaultNavigationOptions: {
    title: 'Overheard Deals'
  }
});

export default createAppContainer(navigator);

