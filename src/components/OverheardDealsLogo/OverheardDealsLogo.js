import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import LogoImage from '../../img/overhearddealslogo.png';

const OverheardDealsLogo = () => {
    return (
        <View style={styles.logoBox}>
            <Image
                style={styles.logo}
                source={ LogoImage }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    logoBox: {
        height: 98,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        width: 271,
        height: 98,
    }
});

export default OverheardDealsLogo;