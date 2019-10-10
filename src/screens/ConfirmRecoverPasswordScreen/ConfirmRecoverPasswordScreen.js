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

        <View style={styles.confirmTitleBoxPosition}>
            <View style={styles.confirmTitleBox}>                    
                <Text style={styles.confirmTitleText} >Confirmed</Text>
            </View>
        </View>
        
        <View style={styles.confirmRecoverTextBoxPosition}>
            <View style={styles.confirmRecoverTextBox}>
                <Text style={styles.confirmRecoverTextTop}>A link to reset your password</Text>
                <Text style={styles.confirmRecoverText} >has been</Text>
                <Text style={styles.confirmRecoverText} >SENT to</Text>
                <Text style={styles.confirmRecoverText} >`$(email)`</Text>
            </View>   
        </View>



        <View style={styles.confirmRecoverOkButtonPosition}>
            <View style={styles.confirmRecoverOkButton}>                    
                <Button title='Ok' onPress={() => navigation.navigate('LoginScreen')} />
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
    
    confirmTitleBoxPosition: {
        marginTop: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1,
    },
    confirmTitleBox: {
        width: 270,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        
    },
    confirmTitleText: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        paddingTop: 12,
        color: 'black',
    },
    
    confirmRecoverTextBoxPosition: {
        marginTop: -25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmRecoverTextBox: {
        width: 355,
        height: 270,
        backgroundColor: '#B8F3DC',
        borderWidth: 2,
        borderColor: 'black',
    },
    confirmRecoverTextTop: {
        paddingTop: 52,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

    confirmRecoverText: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

    confirmRecoverOkButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmRecoverOkButton: {
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