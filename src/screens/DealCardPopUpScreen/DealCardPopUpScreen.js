import React, { useState, useContext } from 'react';
import { AppRegistry, TextInput, View, Linking, Text, StyleSheet, ImageBackground, Button, Image, TouchableOpacity } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'

import { Context as AuthContext } from '../../context/AuthContext';

import { navigate } from '../../navigationRef';



const DealCardPopUpScreen = ({navigation}, props) => {

    const { state, repPlatform } = useContext(AuthContext);



    const renderDealButton = () => state.cardObject.offline ?
        
        <TouchableOpacity style={styles.touchableOpacity}
                        
            onPress={ () => navigate('DealCardQRPopUpScreen')} >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>Claim</Text>
            </View>

        </TouchableOpacity>

        :

        <TouchableOpacity style={styles.touchableOpacity}
                            
            onPress={ () => Linking.openURL(state.cardObject.link)} >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>{state.cardObject.buttonText}</Text>
            </View>

        </TouchableOpacity>
        ;
        
        

    




    return (

    <ImageBackground source={backimage} style={styles.container}>
        
        <View style={styles.dealImagePosition}>
            <View>

                {/* QR code = state.userObject.id */}

                <View style={styles.cardImageContainer}>

                    <View>
                    {/* <View style={styles.dealImage}> */}
                        {/* <Text style={styles.cardTextMainOffer}>{state.userObject.id}</Text> */}

                        {/* <QRCode
                            value={state.userObject.id}
                            size={276}
                            color="black"
                            backgroundColor="white"
                        /> */}
                        
                        <Image
                            style={styles.dealImage}
                            source={{ uri: `https://overheard.co.uk/img/${state.cardObject.img}` }} />
                    </View>
                </View>

            </View>
        </View>
        <View style={styles.dealDescriptionPosition}>
            <View style={styles.dealDescription}>

            

                <Text style={styles.cardTextName} >{state.cardObject.name}</Text>
                <Text style={styles.cardTextMainOffer}>{state.cardObject.mainOffer}</Text>
                <Text style={styles.cardTextOfferSmall}>{state.cardObject.offerSmall}</Text>

                <Text style={styles.cardTextOfferSmall}>{state.cardObject.categories}</Text>
                

                <View style={styles.cardButtonPosition}>


                                    
                        {renderDealButton()}
                    
                </View>


                {/* <View style={styles.cardButtonPosition}>


                                    
                        <TouchableOpacity style={styles.touchableOpacity}
                    
                            onPress={ () => Linking.openURL(state.cardObject.link)} >

                            <View style={styles.cardButton}>     
                                <Text style={styles.cardButtonText}>{state.cardObject.buttonText}</Text>
                            </View>

                        </TouchableOpacity>
                    
                </View> */}
                
                {/* <View style={styles.cardButtonPosition}>

                        <TouchableOpacity style={styles.touchableOpacity}
            
                            onPress={ () => navigate('DealCardQRPopUpScreen')} >

                            <View style={styles.cardButton}>     
                                <Text style={styles.cardButtonText}>Claim</Text>
                            </View>

                        </TouchableOpacity>


                        
                        

                </View> */}

                
            </View>
        </View>

        <BottomDrawer
            containerHeight={70}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< baaack" onPress={() => navigation.navigate('DealsScreen')} />
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
        backgroundColor: 'pink',
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

});

export default DealCardPopUpScreen;