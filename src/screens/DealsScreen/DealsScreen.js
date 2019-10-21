import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'
import DealsList from '../../components/DealsList/DealsList'
import { createKeyboardAwareNavigator } from 'react-navigation';

const DealsScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>

        <Header />
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