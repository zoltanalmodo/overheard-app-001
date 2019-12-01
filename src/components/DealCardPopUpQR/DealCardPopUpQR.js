import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import { Context as AuthContext } from '../../context/AuthContext';



const DealCardPopUpQR = ({navigation}, props) => {

    const { state } = useContext(AuthContext)

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
        
    },

    dealPopUpCardPosition: {
        flexDirection: 'column',
        justifyContent: 'center',

        height: 571,
        width: 260,
           
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
        width: 258,
        height: 51,
        textAlign: 'center',

    },
    cardButton: {
        width: 250,
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