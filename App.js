import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DealsScreen from './src/screens/DealsScreen/DealsScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';


const navigator = createStackNavigator (
  {
  DealsScreen: DealsScreen,
  LoadingScreen: LoadingScreen,
  },
{
  initialRouteName: 'DealsScreen',
  defaultNavigationOptions: {
    title: 'Overheard Deals'
  }
});

export default createAppContainer(navigator);

