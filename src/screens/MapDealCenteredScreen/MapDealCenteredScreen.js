import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'

const MapDealCenteredScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.mapDealCenteredScreenText}>Map Deal Centered Screen</Text>
        
    </ImageBackground>
    )
};

MapDealCenteredScreen.navigationOptions = () => {
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
      mapDealCenteredScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});

export default MapDealCenteredScreen;