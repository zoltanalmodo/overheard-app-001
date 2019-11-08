import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'
import DealsList from '../../components/DealsList/DealsList'
import { createKeyboardAwareNavigator } from 'react-navigation';

import Overlay from 'react-native-modal-overlay';

const DealsScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>

        
        <Header />

        <Overlay visible={false} closeOnTouchOutside>
          <Text>Contact details:</Text>

          <Text>City:</Text>
          <Text>Email address:</Text>
          {/* <Text>Subscription type:</Text> */}
          <Text>Renewal date:</Text>
          <Text>Cancel Subscription:</Text>
        </Overlay>

        <DealsList />
        
        
    </ImageBackground>
    )
};

DealsScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      }
});

export default DealsScreen;