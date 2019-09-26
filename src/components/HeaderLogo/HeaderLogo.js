import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LogoImage from './overheardlogo.png'

const HeaderLogo = () => {
    return (
        <View style={styles.logoBar}>
            <Image
                style={styles.logo}
                source={ LogoImage }
        />
        </View>
    )
};

const styles = StyleSheet.create({
    logoBar: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: '42%',
        height: 32
    }
});

export default HeaderLogo;