import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import backimage from '../../img/newbg.png'

import { Context as AuthContext } from '../../context/AuthContext';

import { navigate } from '../../navigationRef';

const DealCardQRPopUpScreen = ({navigation}, props) => {

    const { state } = useContext(AuthContext);

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <View style={styles.dealPopUpCardPosition}>
            <View style={styles.dealImagePosition}>

                    <View style={styles.cardImageContainer}>
                        <View style={styles.dealImage}>

                            <QRCode
                                value={state.userObject.id}
                                size={278}
                                color="black"
                                backgroundColor="white"
                            />

                        </View>
                    </View>

            </View>

            <View style={styles.dealDescriptionPosition}>
                <View style={styles.dealDescription}>

                    <View style={styles.instructionsPosition}>
                        <Text style={styles.instructions}>
                            
                            Please Present
                            This Code
                            To The Merchant
                            To Scan
                        
                        </Text>
                    </View>
                    
                </View>
            </View>
        </View>


    </ImageBackground>

    )
};

DealCardQRPopUpScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        justifyContent: 'center',


        // borderWidth: 2,
        // borderColor: 'red',
        
        flex: 1,
        // remove width and height to override fixed static size
        // width: null,
        // height: null,
    },
    dealPopUpCardPosition: {
        // borderWidth: 2,
        // borderColor: 'blue',
    },

    dealBuyOnlineScreenText: {
        textAlign: 'center',
        fontSize: 36,
        color: 'salmon',
    },
    dealImagePosition: {
        
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealImage: {
        width: 280,
        height: 280,
        backgroundColor: 'pink',

        borderWidth: 1,
        borderColor: 'grey',
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

        borderWidth: 1,
        borderColor: 'grey',
    },

    cardTextName: {
        fontSize: 10,
        textAlign: 'center',
    },

    cardTextMainOffer: {
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center',
    },

    cardTextOfferSmall: {
        fontSize: 10,
        textAlign: 'center',
    },


    cardButton: {
        width: '85%',
        height: 25,
        backgroundColor: 'black',
    },
    cardButtonText: {
        paddingTop: 4,
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
    },


    cardButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchableOpacity: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '85%',
        height: 25,
        backgroundColor: 'black',
        textAlign: 'center',
    },


    instructionsPosition: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    instructions: {
        marginTop: 90,
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        fontWeight: '800',
    },

});

export default DealCardQRPopUpScreen;