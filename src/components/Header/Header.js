import React from 'react';
import { View, StyleSheet } from 'react-native';

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
        height: 88,
        backgroundColor: 'white',
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