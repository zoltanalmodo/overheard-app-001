import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'


import { Context as AuthContext, clearErrors } from '../../context/AuthContext';



const LoginScreen = ({navigation}) => {

    const { state, login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        return (

            <ImageBackground source={backimage} style={styles.container}>
                <View style={styles.logoPosition}>
                    <OverheardDealsLogo />
                </View>

                <View style={styles.emailTextInputPosition}>
                    <TextInput
                        value={email}
                        onChangeText = {(newEmail) => setEmail(newEmail)}

                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.emailTextInput}
                        label='email'
                        placeholder='email'
                        placeholderTextColor='black'
                        keyboardAppearance='dark'
                        keyboardType='email-address'
                        returnKeyType='done'
                        clearTextOnFocus={true}

                    />
                </View>
                
                <View style={styles.passwordTextInputPosition}>
                    <TextInput
                        value={password}
                        onChangeText = {setPassword}

                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.passwordTextInput}
                        label='password'
                        placeholder='password'
                        placeholderTextColor='black'
                        keyboardAppearance='dark'
                        keyboardType='default'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                        secureTextEntry={true}
                    />
                </View>

                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

                <View style={styles.loginButtonPosition}>
                        <View style={styles.loginButton}>                    
                            <Button title='Login' onPress={() => login({ email, password })} />
                        </View>
                </View>

                <View style={styles.forgotPasswordPosition}>
                        <View style={styles.forgotPassword}>                    
                            <Button title='forgot password' onPress={() => navigation.navigate('ResetPasswordScreen', {clearErrors})} />
                        </View>
                </View>

                <View style={styles.newUserPosition}>
                        <View style={styles.newUser}>                    
                            <Button title='I am a new user' onPress={() => navigation.navigate('#')} />
                        </View>
                </View>

                <View style={styles.repLoginButtonPosition}>
                        <View style={styles.repLoginButton}>                    
                            <Button title='Rep' onPress={() => navigation.navigate('RepLoginScreen')} />
                        </View>
                </View>
                
            </ImageBackground>

        );

};

LoginScreen.navigationOptions = () => {
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

    emailTextInputPosition: {
        marginTop: 52,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emailTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    passwordTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    passwordTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    errorMessage: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },
    
    loginButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginButton: {
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

    forgotPasswordPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPassword: {

    },

    newUserPosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    
    // newUser: {

    // },

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


export default LoginScreen;