import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'

const MapUserCenteredScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.mapUserCenteredScreenText}>Map User Centered Screen</Text>
        
    </ImageBackground>
    )
};

MapUserCenteredScreen.navigationOptions = () => {
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
      mapUserCenteredScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});

export default MapUserCenteredScreen;