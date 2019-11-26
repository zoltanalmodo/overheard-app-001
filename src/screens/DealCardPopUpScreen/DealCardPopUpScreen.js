import React, { useState, useContext } from 'react';
import { AppRegistry, TextInput, View, Linking, Text, StyleSheet, ImageBackground, Button, Image, TouchableOpacity } from 'react-native';

import BackButton from '../../components/BackButton/BackButton';

import backimage from '../../img/newbg.png'
import tagsIcon from '../../img/tag-icon.png'

import { Context as AuthContext } from '../../context/AuthContext';

import { navigate } from '../../navigationRef';




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
                <Text style={styles.cardButtonText}>{state.cardObject.buttonText}</Text>
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

                        <Text style={styles.cardTextName} >{state.cardObject.name}</Text>
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

                        <View style={styles.tagLinePosition}>
                            <Image source={tagsIcon} style={styles.imgTags}/>
                            <Text style={styles.cardTextTags}>{state.cardObject.tags}</Text>
                        </View>

                    </View>

                </View>

            </View>

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
        backgroundColor: 'white',

        borderWidth: 1,
        borderColor: 'grey',
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

        borderWidth: 1,
        borderColor: 'grey',

        textAlign: 'center',
    },

    cardTextContainerOrange: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 229,

        // backgroundColor: 'orange',

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


    tagLinePosition: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    imgTags: {
        marginLeft: 5,
        width: 12,
        height: 12,
    },
    cardTextTags: {
        marginLeft: 5,
        fontSize: 8,
        textAlign: 'left',
        marginTop: 1,
    },
    
    cardButtonPositionCyan: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
    },
    cardButtonSectionRed: {
        position: 'absolute',
        bottom: -1,
        width: 278,
        height: 51,
        textAlign: 'center',

        // backgroundColor: 'red'
    },
    cardButton: {
        width: 270,
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
        width: '95%',
        height: 25,
        backgroundColor: '#FF8D4F',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 3,
    },

});

export default DealCardPopUpScreen;