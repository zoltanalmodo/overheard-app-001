import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderButtonsProfile from '../HeaderButtonsProfile/HeaderButtonsProfile'
import HeaderLogo from '../../HeaderLogo/HeaderLogo'

const HeaderProfile = () => {
    return (
        <View style={styles.header}>
            <HeaderLogo />
            <HeaderButtonsProfile />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 88,
        backgroundColor: 'white',
        position: 'relative',
        // zIndex: 1,
    },
    logoBar: {
        height: 30,
    },
    logo: {
        fontSize: 18,
        textAlign: 'center'
    }
});

export default HeaderProfile;