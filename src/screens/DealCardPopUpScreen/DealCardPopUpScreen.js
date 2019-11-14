import React, { useState, useContext } from 'react';
import { AppRegistry, TextInput, View, Linking, Text, StyleSheet, ImageBackground, Button, Image, TouchableOpacity } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'

import { Context as AuthContext } from '../../context/AuthContext';

import { navigate } from '../../navigationRef';


String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

const DealCardPopUpScreen = ({navigation}, props) => {

    const { state, repPlatform } = useContext(AuthContext);



    const renderDealButton = () => state.cardObject.offline ?
        
        <TouchableOpacity style={styles.touchableOpacity}
                        
            onPress={ () => navigate('DealCardQRPopUpScreen')} >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>CLAIM</Text>
            </View>

        </TouchableOpacity>

    :   state.cardObject.name === 'Capital Cabs' ?

        <Text></Text>

    :

        <TouchableOpacity style={styles.touchableOpacity}
                            
            onPress={ () => Linking.openURL(state.cardObject.link)} >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>{state.cardObject.buttonText.toUpperCase()}</Text>
            </View>

        </TouchableOpacity>
        
        
        

    




    return (

    <ImageBackground source={backimage} style={styles.container}>
        
        
        <View style={styles.dealImagePosition}>
            <View>
                <View style={styles.cardImageContainer}>
                    <View>                  
                        <Image
                            style={styles.dealImage}
                            source={{ uri: `https://overheard.co.uk/img/${state.cardObject.img}` }} />
                    </View>
                </View>
            </View>
        </View>


        <View style={styles.dealDescriptionPosition}>

            <View style={styles.dealDescriptionGreen}>

                <View style={styles.cardTextContainerOrange}>

                    <Text style={styles.cardTextName} >{state.cardObject.name.capitalize()}</Text>
                    <Text style={styles.cardTextMainOffer}>{state.cardObject.mainOffer}</Text>
                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.offerSmall}</Text>

                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.lineOne}</Text>
                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.lineTwo}</Text>
                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.lineThree}</Text>
                    
                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.availability}</Text>
        
                    <Text style={styles.cardTextOfferSmall}>{state.cardObject.location}</Text>
                
                </View>

            
                <View style={styles.cardButtonSectionRed}>

                    <View style={styles.cardButtonPositionCyan}>
                            {renderDealButton()}
                    </View>
                    <Text style={styles.cardTextTags}>{state.cardObject.tags}</Text>

                </View>

            </View>

        </View>


        <BottomDrawer
            containerHeight={90}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< back" onPress={() => navigation.navigate('DealsScreen')} />
        </BottomDrawer>


    </ImageBackground>
    );
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
    dealDescriptionGreen: {
        width: 280,
        height: 280,
        backgroundColor: 'white',

        borderWidth: 2,
        borderColor: 'green',

        textAlign: 'center',
    },

    cardTextContainerOrange: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 225,

        borderWidth: 2,
        borderColor: 'orange',
    },

    cardTextName: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '800',
    },
    cardTextMainOffer: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    cardTextOfferSmall: {
        fontSize: 12,
        textAlign: 'center',
    },
    cardTextTags: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 3,
    },
    
    cardButtonPositionCyan: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',

        borderWidth: 2,
        borderColor: 'cyan',
    },
    cardButtonSectionRed: {
        position: 'absolute',
        bottom: -2,
        width: 280,
        height: 55,
        textAlign: 'center',

        borderWidth: 2,
        borderColor: 'red',
    },
    cardButton: {
        width: '85%',
        height: 25,
        backgroundColor: '#FF8D4F',
    },
    cardButtonText: {
        paddingTop: 5,
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        fontWeight: '800',
    },
    
    touchableOpacity: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '85%',
        height: 25,
        backgroundColor: '#FF8D4F',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 3,
    },

});

export default DealCardPopUpScreen;