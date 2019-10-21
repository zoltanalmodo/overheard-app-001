import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'

const DealCardPopUpScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <View style={styles.dealImagePosition}>
            <View style={styles.dealImage}></View>
        </View>
        <View style={styles.dealDescriptionPosition}>
            <View style={styles.dealDescription}></View>
        </View>

        <BottomDrawer
            containerHeight={70}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< baaack" onPress={() => navigation.navigate('DealScreen')} />
        </BottomDrawer>
        
    </ImageBackground>
    )
};

DealCardPopUpScreen.navigationOptions = () => {
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
    dealBuyOnlineScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    },
    dealImagePosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealImage: {
        width: 280,
        height: 280,
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: 'black',
    },

    dealDescriptionPosition: {
        marginTop: -2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealDescription: {
        width: 280,
        height: 280,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
    },

});

export default DealCardPopUpScreen;