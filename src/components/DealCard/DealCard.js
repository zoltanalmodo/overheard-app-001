import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const DealCard = (props) => {
    return (
        
            <View style={styles.cardContainer}>
                <Image style={{ width: 139, height: 139 }} source={{ uri: `https://overheard.co.uk/img/${props.img}` }} />
                
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTextName}>{props.name}</Text>
                    {/* <Text style={styles.cardTextLineOne}>{props.lineOne}</Text>
                    <Text style={styles.cardTextLineTwo}>{props.lineTwo}</Text>
                    <Text style={styles.cardTextLineThree}>{props.lineThree}</Text> */}
                    <Text style={styles.cardTextMainOffer}>{props.mainOffer}</Text>
                    <Text style={styles.cardTextOfferSmall}>{props.offerSmall}</Text>
                    
                </View>

            </View>
    )
};

const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: 'white',
        width: 139,
        height: 260,
        alignItems: 'center',
    },

    cardImageContainer: {
        backgroundColor: 'purple',
        width: 139,
        height: 139,
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
    
    
});

export default DealCard;