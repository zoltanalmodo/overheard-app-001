import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const RepSignUpScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>
        <Text style={styles.repSignUpScreenText}>Rep Sign Up Screen</Text>
        
    </ImageBackground>
    )
};

RepSignUpScreen.navigationOptions = () => {
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
    logoPosition: {
        marginTop: 52,
      },
      repSignUpScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});

export default RepSignUpScreen;