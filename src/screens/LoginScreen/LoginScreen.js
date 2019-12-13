import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity, Linking } from 'react-native';

import backimage from '../../img/newbg.png';
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';


import { Context as AuthContext } from '../../context/AuthContext';
import axios from 'axios';


    // async function fetchMyAPI() {
    //     // var is used to shadow the global variable, DO NOT change it to const or let
    //     var deals = await axios.get('https://overheard.co.uk/card/all-ajax');
    //     setDeals(deals.data);
    //     setCategory('All Deals');
    // };

    //     useEffect(() => {
    //         fetchMyAPI();
    //     }, []);


const LoginScreen = ({navigation}) => {

    const { state, login, setDealsArray, setCategoryAllDeals } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function fetchDealsArray() {

        // var is used to shadow the global variable, DO NOT change it to const or let
        var deals = await axios.get('https://overheard.co.uk/card/all-ajax');

        setDealsArray(deals.data);
        
    };

    

    useEffect(() => {
        fetchDealsArray();
        // setCategoryAllDeals();
        
        
    }, []);

    
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

                <TouchableOpacity
                    onPress={() => login({ email, password })} 
                    
                >                    
                    <View style={styles.loginButtonPosition}>
                        <Text style={styles.loginButton}>Login</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')} >
                    <View style={styles.forgotPasswordPosition}>
                            <View style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                            </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress= { () => Linking.openURL('https://overheard.co.uk')} >
                
                    <View style={styles.forgotPasswordPosition}>
                            <View style={styles.forgotPassword}>
                                <Text style={styles.newUserText }>I Am A New User</Text>
                            </View>
                    </View>
                </TouchableOpacity>
                
                

                <TouchableOpacity
                    onPress={() => navigation.navigate('RepLoginScreen')}
                >                    
                    <View style={styles.loginButtonPosition}>
                        <Text style={styles.repLoginButton}>Rep</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('MerchantLoginScreen')}
                >                    
                    <View style={styles.loginButtonPosition}>
                        <Text style={styles.merchantLoginButton}>Merchant Login</Text>
                    </View>
                </TouchableOpacity>
                
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
        marginTop: 42,
      },

    emailTextInputPosition: {
        marginTop: 20,
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

    newUserPosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    newUserText: {
        textAlign: 'center',
        fontSize: 18,
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
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
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

    merchantLoginButton: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
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