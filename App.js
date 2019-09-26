import { createAppContainer } from 'react-navigation';
import DealsScreen from './src/screens/DealsScreen/DealsScreen';
import { createStackNavigator } from 'react-navigation-stack';



const navigator = createStackNavigator (
  {
  Screen: DealsScreen
  },
{
  initialRouteName: 'Screen',
  defaultNavigationOptions: {
    title: 'Overheard Deals'
  }
});

export default createAppContainer(navigator);

