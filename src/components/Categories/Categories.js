import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Categories = () => {
    return (

        <View style={styles.margins}>

            <View style={styles.columns}>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>EVENTS & FESTIVALS</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>FASHION & SHOPPING</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>HAIR & BEAUTY</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>LIFESTYLE</Text>
                </View>
                
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>FOOD & DRINK</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>HEALTH & FITNESS</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>TECHNOLOGY</Text>
                </View>
                <View style={styles.buttonsBox}>
                    <Text style={styles.buttonsText}>TAXIS & CARS</Text>
                </View>
            </View>

            <View style={styles.buttonsAll}>
                <Text style={styles.buttonsText}>ALL</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    
    margins: {
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8
    },

    columns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    buttonsBox: {
        height: 24,
        width: '49.5%',
        backgroundColor: 'black',
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4
    },

    buttonsAll: {
        height: 24,
        marginTop: 4,
        backgroundColor: 'black',
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonsText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    }
    
});

export default Categories;