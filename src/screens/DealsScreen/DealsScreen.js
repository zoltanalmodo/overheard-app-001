import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from './newbg.png'
import Header from '../../components/Header/Header.js'
import Categories from '../../components/Categories/Categories'
import DealsList from '../../components/DealsList/DealsList'

const DealsScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        <Header />
        <Categories />
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
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      }
});

export default DealsScreen;