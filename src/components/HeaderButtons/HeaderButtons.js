import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderButtons = () => {
    return (
        <View style={styles.filter}>
            <Text style={styles.buttonActive}>[ DEALS ]</Text>
            <Text style={styles.button}>[ MAP ]</Text>
            <Text style={styles.button}>[ PROFILE ]</Text>
            <Text style={styles.buttonLogout}>[ LOGIN ]</Text>            
        </View>

    )
};

const styles = StyleSheet.create({
    filter: {
        height: 24,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        fontWeight: '600',
        fontSize: 18
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