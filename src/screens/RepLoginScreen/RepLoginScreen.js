import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const RepLoginScreen = ({navigation}) => {
    
    
        return (

            <ImageBackground source={backimage} style={styles.container}>
                <View style={styles.logoPosition}>
                    <OverheardDealsLogo />
                </View>

                <View style={styles.emailTextInputStylePosition}>
                    <TextInput
                        style={styles.emailTextInputSyle}
                        label='email'
                        placeholder='email'
                        placeholderTextColor='black'
                        keyboardAppearance='dark'
                        keyboardType='email-address'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>
                
                <View style={styles.loginButtonStylePosition}>
                        <View style={styles.loginButtonStyle}>                    
                            <Button title='Continue' onPress={() => navigation.navigate('RepSignUpScreen')} />
                        </View>
                </View>
                
            </ImageBackground>

        );

    
};

RepLoginScreen.navigationOptions = () => {
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

    emailTextInputStylePosition: {
        marginTop: 122,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emailTextInputSyle: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    passwordTextInputStylePosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    passwordTextInputSyle: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    
    loginButtonStylePosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginButtonStyle: {
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

    forgotPasswordStylePosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPasswordStyle: {
    },

    newUserStylePosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    newUserStyle: {
    },

    repLoginButtonPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    repLoginButton: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color:  'white',
        height: 50,
        width: 270,
        borderColor: '#ECECEC',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },

});

export default RepLoginScreen;