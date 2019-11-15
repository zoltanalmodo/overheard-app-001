import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';

import { navigate } from '../../navigationRef';
import backicon from '../../img/back-icon.png';


const BackButton = () => {

    return (

    <View style={styles.container}>

        <TouchableOpacity style={styles.touchableOpacity}                            
            onPress={() => navigate('DealsScreen')} >
            <View style={styles.backButtonPosition}>
                <Image source={backicon} style={styles.backicon}/>
            </View>
        </TouchableOpacity>

        <View style={styles.test}></View>
    </View>

    )
};

BackButton.navigationOptions = () => {
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

    mapUserCenteredScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    },

    backButtonPosition: {
        position: 'fixed',
        textAlign: 'right',
        zIndex: 4,
    },

    backicon: {

        marginLeft: 15,
        width: 30,
        height: 30,

        zIndex: 5,
    },

    test: {
        backgroundColor: 'magenta',
        height: '100%',
        width: '100%',

        zIndex: -1,

        position: 'absolute',
    },

});

export default BackButton;