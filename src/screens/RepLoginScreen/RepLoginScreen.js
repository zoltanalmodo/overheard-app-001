import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text, TouchableOpacity } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'


import { Context as AuthContext } from '../../context/AuthContext';


const RepLoginScreen = ({navigation}) => {

    const { state, repLogin } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
        return (

            <ImageBackground source={backimage} style={styles.container}>
                <View style={styles.logoPosition}>
                    <OverheardDealsLogo />
                </View>


                <View style={styles.repTitlePosition}>
                        
                            <Text style={styles.repTitleText}>Rep login</Text>
                        
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

                { state.errorMessage ? 
                
                    <Text style={ styles.errorMessage }>{ state.errorMessage }</Text>
                    
                    : null
                
                }


                
                <View style={styles.repLoginButtonPosition}>
                    <TouchableOpacity
                        onPress={() => repLogin({ email, password })}
                        
                    >                    
                        <View style={styles.loginButtonPosition}>
                            <Text style={styles.repLoginButton}>Rep login</Text>

                        </View>
                    </TouchableOpacity>
                </View>



                <TouchableOpacity onPress={() => navigation.navigate('ResetRepPasswordScreen')} >
                    <View style={styles.forgotPasswordPosition}>
                            <View style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText }>forgot rep password</Text>
                            </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('RepSignUpScreen')} >
                    <View style={styles.becomeARepPosition}>
                            <View style={styles.becomeARep}>
                                <Text style={styles.becomeARepText }>become a rep</Text>
                            </View>
                    </View>
                </TouchableOpacity>



                <BottomDrawer
                    containerHeight={90}
                    backgroundColor='darkblue'
                    shadow={true}
                    startUp={true}
                >
                    <Button title="<<< back" onPress={() => navigation.navigate('LoginScreen')} />
                </BottomDrawer>
                
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

    repTitlePosition: {
        marginTop: 42,
    },
    repTitleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 32,
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
    
    repLoginButtonPosition: {
        marginTop: 20,
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

export default RepLoginScreen;