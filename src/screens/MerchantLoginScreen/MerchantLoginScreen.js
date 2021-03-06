import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

import backimage from '../../img/newbg.png';
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';

import BackButton from '../../components/BackButton/BackButton';

import { Context as AuthContext } from '../../context/AuthContext';


const MerchantLoginScreen = ({navigation}) => {

    const { state, merchantLogin } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
        return (

            <ImageBackground source={backimage} style={styles.container}>
                

                <BackButton navigate='LoginScreen' />                
                
                
                <View style={styles.logoPosition}>
                    <OverheardDealsLogo />
                </View>



                <View style={styles.repTitlePosition}>
                        
                            <Text style={styles.repTitleText}>Merchant Login</Text>
                        
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
                
                
                    <TouchableOpacity
                        onPress={() => merchantLogin({ email, password })}
                        
                    >                    
                        <View style={styles.merchantLoginButtonPosition}>
                            <Text style={styles.merchantLoginButton}>Merchant Login</Text>

                        </View>
                    </TouchableOpacity>
                

                
                
            </ImageBackground>

        );

};

MerchantLoginScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },

    logoPosition: {
        marginTop: 54,
        
    },

    repTitlePosition: {
        marginTop: 32,
    },
    repTitleText: {
        textAlign: 'center',
        fontWeight: '700',
        color: 'black',
        fontSize: 30,
    },

    emailTextInputPosition: {
        marginTop: 15,
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
    
    merchantLoginButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    merchantLoginButton: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
        height: 50,
        width: 270,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },

    forgotPasswordPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: 18,
    },

    becomeARepPosition: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    becomeARepText: {
        textAlign: 'center',
        fontSize: 18,
    },


});

export default MerchantLoginScreen;