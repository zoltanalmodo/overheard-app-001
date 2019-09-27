import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderButtons = () => {
    return (
        <View style={styles.topNavBar}>
            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>Categories</Text>
            </View>
            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>Deals Map</Text>
            </View>
            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>Profile</Text>
            </View>          
        </View>
    )
};

const styles = StyleSheet.create({
    topNavBar: {
        height: 36,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5
    },
    buttonBox: {
        height: 36,
        width: 101,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
        top: 1,

    }
});

export default HeaderButtons;