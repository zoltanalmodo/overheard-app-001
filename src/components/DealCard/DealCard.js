import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const DealCard = (props) => {
    return (
        
            <View style={styles.cardContainer}>
                {/* <Image source={} /> */}
                <View style={styles.cardTextContainer}>
                    <Text>{props.name}</Text>
                    <Text>{props.lineOne}</Text>
                    <Text>{props.lineTwo}</Text>
                    <Text>{props.lineThree}</Text>
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
        width: 160,
        alignItems: 'center',

        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 0,
    },

    cardTextContainer: {
    },

    imageStyle: {
        borderRadius: 10,
        width: 160,
        height: 160,
    },
    
});

export default DealCard;