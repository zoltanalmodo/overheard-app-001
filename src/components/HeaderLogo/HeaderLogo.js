import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LogoImage from '../../img/overhearddealslogo.png';

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
        height: 52,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 134,
        height: 48
    }
});

export default HeaderLogo;