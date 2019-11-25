import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';


import { navigate } from '../../navigationRef';
import backicon from '../../img/back-icon.png';

import BackButton from '../../components/BackButton/BackButton';


const BackButtonScreeenTest = () => {

    return (

        <View style={styles.container}>
            
            <BackButton navigate='DealsScreen' />

            <View style={styles.test}>
            </View>

        </View>

            

            

        

    )
};

BackButtonScreeenTest.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({

    container: {
        marginTop: 33,
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
        position: 'relative',
    },


    test: {
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%',

        zIndex: -1,

        position: 'absolute',

        borderWidth: 2,
        borderColor: 'red',
    },


});

export default BackButtonScreeenTest;