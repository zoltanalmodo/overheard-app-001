import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderButtons = () => {
    return (
        <View style={styles.filter}>
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
    filter: {
        height: 36,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 18,
        border: 2,
    },
    buttonBox: {
        height: 36,
        width: 101,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
        top: 1,

    },
    buttonActive: {
        backgroundColor: 'rgb(30, 30, 30)',
        fontWeight: '600',
        color: 'white',
        fontSize: 18
    },
    buttonLogout: {
        fontWeight: '600',
        backgroundColor: 'rgb(0, 237, 241)',
        fontSize: 18
    }
});

export default HeaderButtons;