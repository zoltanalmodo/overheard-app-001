import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const DealCard = (props) => {
    return (
        
            <View style={styles.cardContainer}>
                <Image
                    style={styles.imageStyle} 
                    source={require(`./img/${props.img}`) } />
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
        width: 180,
        alignItems: 'center',

        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
    },

    cardTextContainer: {
    },

    imageStyle: {
        borderRadius: 10,
        width: 180,
        height: 180,
    },
    
});

export default DealCard;