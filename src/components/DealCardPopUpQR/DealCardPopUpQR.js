import React, { useContext } from 'react';
import { View, Linking, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import tagsIcon from '../../img/tag-icon.png'

import { Context as AuthContext } from '../../context/AuthContext';



const DealCardPopUpQR = ({navigation}, props) => {

    const { state, displayPopUpDealCardQR } = useContext(AuthContext)



    const renderDealButton = () => state.cardObject.offline ?
        
        <TouchableOpacity style={styles.touchableOpacity}
                        
            onPress={ () => displayPopUpDealCardQR() } >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>CLAIM</Text>
            </View>

        </TouchableOpacity>

    :   state.cardObject.link === "" ?
        <Text></Text>

    :   <TouchableOpacity style={styles.touchableOpacity}
                            
            onPress={ () => Linking.openURL(state.cardObject.link)} >

            <View style={styles.cardButton}>     
                <Text style={styles.cardButtonText}>{state.cardObject.buttonText}</Text>
            </View>

        </TouchableOpacity>
    




    return (
            
        <View style={styles.dealPopUpCardPosition}>
        


            <View style={styles.dealImagePosition}>
                <View>
                    <View style={styles.cardImageContainer}>
                        <View>                  
                                                

                            <QRCode
                                value={state.userObject.id}
                                size={258}
                                color="black"
                                backgroundColor="white"
                            />

                        
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.dealDescriptionPosition}>
                <View style={styles.dealDescriptionGreen}>


                    <View style={styles.instructionsPosition}>
                        <Text style={styles.instructions}>
                            
                            Please Present
                            This Code
                            To The Merchant
                            To Scan
                        
                        </Text>
                    </View>


                    {/* <View style={styles.cardTextContainerOrange}>
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
                    </View> */}

                    


                </View>
            </View>



        </View>

    );
};


DealCardPopUpQR.navigationOptions = () => {
    return {
        header: null
    };
};


const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        justifyContent: 'center',


        // // borderWidth: 2,
        // borderColor: 'red',
        
        // flex: 1,
        // remove width and height to override fixed static size
        // width: null,
        // height: null,
    },

    dealPopUpCardPosition: {
        flexDirection: 'column',
        justifyContent: 'center',

        height: 571,
        width: 260,

        // borderColor: 'red',
        // borderWidth: 2,
       
    },
        
    dealImagePosition: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dealImage: {
        width: 258,
        height: 258,
        backgroundColor: 'white',
    },


    dealDescriptionPosition: {
        marginTop: -1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dealDescriptionGreen: {
        width: 258,
        height: 310,
        backgroundColor: 'white',

        paddingLeft: 5,
        paddingRight: 5,
        borderTopWidth: 1,
        borderColor: 'gray',

        textAlign: 'center',
    },

    cardTextContainerOrange: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 249,

        // backgroundColor: 'orange',

        // borderWidth: 2,
        // borderColor: 'orange',

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

        // borderWidth: 2,
        // borderColor: 'cyan',
    },
    cardButtonSectionRed: {
        position: 'absolute',
        bottom: -1,
        width: 258,
        height: 51,
        textAlign: 'center',

        // borderWidth: 2,
        // borderColor: 'blue',
    },
    cardButton: {
        width: 250,
        height: 25,
        backgroundColor: '#FF8D4F',
        // backgroundColor: 'red',

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
        width: '90%',
        height: 25,
        backgroundColor: '#FF8D4F',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 3,
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

export default DealCardPopUpQR;