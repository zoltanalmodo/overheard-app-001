import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';


const DealCard = (props) => {
    return (
        
            <View style={styles.cardContainer}>

                <View style={styles.cardImageContainer}>
                    <Image style={{ width: 135, height: 135 }} source={{ uri: `https://overheard.co.uk/img/${props.img}` }} />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTextName}>{props.name}</Text>
                    <Text style={styles.cardTextMainOffer}>{props.mainOffer}</Text>
                    <Text style={styles.cardTextOfferSmall}>{props.offerSmall}</Text>
                    
                    
                    <View style={styles.cardButtonPosition}>
                        <View style={styles.cardButton}>     
                            <Text style={styles.cardButtonText}>{props.buttonText}</Text>
                        </View>
                    </View>

                </View>
                

            </View>
    )
};

const styles = StyleSheet.create({

    cardContainer: {
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
        width: 139,
        height: 260,
        alignItems: 'center',
    },

    cardImageContainer: {
        backgroundColor: 'white',
        width: 139,
        height: 139,
        borderWidth: 2,
        borderColor: 'black',
    },

    cardTextContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'black',
        borderRadius: 0,
        width: 139,
        height: 121,
    },

    cardTextName: {
        fontSize: 10,
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
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center',
    },

    cardTextOfferSmall: {
        fontSize: 10,
        textAlign: 'center',
    },
    

    cardButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
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
    
});

export default DealCard;