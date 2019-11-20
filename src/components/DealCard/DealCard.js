import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { navigate } from '../../navigationRef';

import { Context as AuthContext } from '../../context/AuthContext';

import tagsIcon from '../../img/tag-icon.png'


String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

const DealCard = (props) => {

    const { state, cardObject } = useContext(AuthContext);


    return (
        
            <View style={styles.cardContainer}>

                <View style={styles.cardImageContainer}>
                    <Image style={{ width: 135, height: 135 }} source={{ uri: `https://overheard.co.uk/img/${props.img}` }} />
                </View>

                

                <View style={styles.dealDescriptionPosition}>


                    <View style={styles.dealDescriptionGreen}>

                        <View style={styles.cardTextContainerOrange}>

                            <Text style={styles.cardTextName}>{props.name}</Text>

                            <Text style={styles.cardTextMainOffer}>{props.mainOffer}</Text>

                            <Text style={styles.cardTextOfferSmall}>{props.offerSmall}</Text>

                        </View>

                        <View style={styles.tagLinePosition}>
                            <Image source={tagsIcon} style={styles.imgTags}/>
                            <Text style={styles.cardTextTags}>{props.tags}</Text>
                        </View>

                        <View style={styles.cardButtonSectionRed}>

                            
                            


                            <View style={styles.cardButtonPositionCyan}>

                                <TouchableOpacity style={styles.touchableOpacity}
                    
                                    onPress={ () => { cardObject({

                                        id: props._id,
                                        img: props.img,
                                        name: props.name,
                                        lineOne: props.lineOne,
                                        lineTwo: props.lineTwo,
                                        lineThree: props.lineThree,
                                        mainOffer: props.mainOffer,
                                        offerSmall: props.offerSmall,
                                        categories: props.categories,
                                        buttonText: props.buttonText,
                                        tags: props.tags,
                                        location: props.location,
                                        availability: props.availability,
                                        link: props.link,

                                        offline: props.offline,

                                    });

                                        navigate('DealCardPopUpScreen')
                                    }}
                                >
                                        
                                    <View style={styles.cardButton}>     
                                        <Text style={styles.cardButtonText}>{props.buttonText}</Text>
                                    </View>

                                </TouchableOpacity>

                            </View>  

                        </View>

                    </View>

                </View>
                
            </View>
    );
};

const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 0,
        marginBottom: 0,
        
        backgroundColor: 'white',
        width: 137,
        height: 260,
        alignItems: 'center',

    },

    cardImageContainer: {
        backgroundColor: 'white',
        width: 137,
        height: 137,

        borderWidth: 1,
        // borderColor: '#dfdfdf',
        borderColor: 'grey',

    },

    

    cardTextDescription: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: 137,
        height: 101,
    },

    cardTextName: {
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        // fontWeight: '800',
        textAlign: 'center',
    },

    cardTextLineOne: {
        fontSize: 10,
        textAlign: 'center',
    },

    cardTextLineTwo: {
        fontSize: 10,
        textAlign: 'center',
    },

    cardTextLineThree: {
        fontSize: 10,
        textAlign: 'center',
    },

    cardTextMainOffer: {

        alignSelf: 'center',
        width: 130,
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center',
    },

    cardTextOfferSmall: {
        fontSize: 10,
        textAlign: 'center',
    },

    cardTextTags: {
        marginLeft: 5,
        fontSize: 8,
        textAlign: 'left',
        marginBottom: 3,
    },
    

    cardButtonPosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',

        // borderWidth: 2,
        // borderColor: 'blue',
    },



    touchableOpacity: {
        width: 129,
        height: 25,
        backgroundColor: '#FF8D4F',


        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 3,
        
    },
    cardButton: {
        width: 129,
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



    dealDescriptionPosition: {
        marginTop: -2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealDescriptionGreen: {
        width: 137,
        height: 129,
        backgroundColor: 'white',
        textAlign: 'center',
        
        borderWidth: 1,
        // borderColor: '#dfdfdf',
        borderColor: 'grey',
    },

    cardTextContainerOrange: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        
        borderRadius: 0,
        backgroundColor: 'white',
        width: 133,
        height: 82,

    },

    cardButtonSectionRed: {

        flexDirection: 'row',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 2,
        width: 135,
        height: 40,
        textAlign: 'center',


    },


    cardButtonPositionCyan: {
        flexDirection: 'row',
        justifyContent: 'center',

        position: 'absolute',
        textAlign: 'center',

        bottom: -2,

        // backgroundColor: 'cyan',

    },

    imgTags: {
        marginLeft: 5,
        width: 12,
        height: 12,
    },

    tagLinePosition: {

        flexDirection: 'row',
        justifyContent: 'flex-start',

    },

    
});

export default DealCard;