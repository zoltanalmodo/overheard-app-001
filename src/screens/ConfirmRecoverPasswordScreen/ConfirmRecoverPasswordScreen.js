import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const ConfirmRecoverPasswordScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>
        
        <View style={styles.confirmRecoverTextBoxPosition}>
            <View style={styles.confirmRecoverTextBox}>

                <Text style={styles.confirmRecoverText}>A link to reset your password has been SENT to `$(email)`</Text>

            </View>
            
        </View>

        <View style={styles.confirmRecoverPasswordButtonPosition}>
            <View style={styles.confirmRecoverPasswordButton}>                    
                <Button title='Ok' onPress={() => navigation.navigate('DealsScreen')} />
            </View>
        </View>

        
    </ImageBackground>
    )
};

ConfirmRecoverPasswordScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
    logoPosition: {
        marginTop: 52,
      },
    
    confirmRecoverTextBoxPosition: {
        marginTop: 62,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmRecoverTextBox: {
        width: 300,
        height: 300,
        backgroundColor: '#B8F3DC',
        borderWidth: 2,
        borderColor: 'black',
    },
    confirmRecoverText: {
        padding: 20,
        fontSize: 18,
        fontWeight: '800',
    },    

    confirmRecoverPasswordButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmRecoverPasswordButton: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color:  'white',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'black',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },
    
});

export default ConfirmRecoverPasswordScreen;