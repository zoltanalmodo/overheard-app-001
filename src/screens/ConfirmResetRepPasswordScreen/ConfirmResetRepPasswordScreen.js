import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const ConfirmResetRepPasswordScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>

        <View style={styles.confirmTitleBoxPosition}>
            <View style={styles.confirmTitleBox}>                    
                <Text style={styles.confirmTitleText}>Confirmed</Text>
            </View>
        </View>
        
        <View style={styles.confirmResetTextBoxPosition}>
            <View style={styles.confirmResetTextBox}>
                <Text style={styles.confirmResetTextBoxTop}>A link to reset your rep password</Text>
                <Text style={styles.confirmResetText}>has been</Text>
                <Text style={styles.confirmResetText}>SENT to</Text>
                <Text style={styles.confirmResetTextEmail}>`$(email)`</Text>
            </View>   
        </View>



        <View style={styles.confirmResetOkButtonPosition}>
            <View style={styles.confirmResetOkButton}>                    
                <Button title='Ok' onPress={() => navigation.navigate('RepLoginScreen')} />
            </View>
        </View>

        
    </ImageBackground>
    )
};

ConfirmResetRepPasswordScreen.navigationOptions = () => {
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
    
    confirmResetTextBoxPosition: {
        marginTop: -25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmResetTextBox: {
        width: 355,
        height: 270,
        backgroundColor: '#C3E1FD',
        borderWidth: 2,
        borderColor: 'black',
    },
    confirmResetTextBoxTop: {
        paddingTop: 52,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

    confirmResetText: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

    confirmResetTextEmail: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        color: 'blue',
    },

    confirmResetOkButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    confirmResetOkButton: {
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

export default ConfirmResetRepPasswordScreen;