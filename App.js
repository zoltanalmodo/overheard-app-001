import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DealsScreen from './src/screens/DealsScreen/DealsScreen';


const navigator = createStackNavigator (
  {
  DealsScreen: DealsScreen,
  },
{
  initialRouteName: 'DealsScreen',
  defaultNavigationOptions: {
    title: 'Overheard Deals'
  }
});

export default createAppContainer(navigator);

