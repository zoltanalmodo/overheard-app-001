import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Font from 'expo-font';

import DealsScreen from './src/screens/DealsScreen/DealsScreen';
import LoadingScreen from './src/screens/LoadingScreen/LoadingScreen';


export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  // ...
}


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

