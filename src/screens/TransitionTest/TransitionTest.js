import React from 'react';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import LoginScreen from '../LoginScreen/LoginScreen';
import DealsScreen from '../DealsScreen/DealsScreen';

const TransitionTest = createAnimatedSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    DealsScreen: DealsScreen,
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }
);
export default TransitionTest;