import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderButtons from '../HeaderButtons/HeaderButtons'
import HeaderLogo from '../HeaderLogo/HeaderLogo'

const Header = () => {
    return (
        <View style={styles.header}>
            <HeaderLogo />
            <HeaderButtons />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 40,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    logoBar: {
        height: 30,
    },
    logo: {
        fontSize: 18,
        textAlign: 'center'
    }
});

export default Header;