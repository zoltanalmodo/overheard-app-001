import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'

const DealsQRCodeScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.dealsQRCodeScreenText}>Deals QR Code Screen</Text>
        
    </ImageBackground>
    )
};

DealsQRCodeScreen.navigationOptions = () => {
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
      },
      dealsQRCodeScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});

export default DealsQRCodeScreen;