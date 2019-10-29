import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

// login backend
import { Context as AuthContext } from '../../context/AuthContext';
//

const RepLoginScreen = ({navigation}) => {

    const { state, repLogin } = useContext(AuthContext);

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
                
                <View style={styles.repLoginButtonPosition}>
                        <View style={styles.repLoginButton}>                    
                            <Button title='Rep login' onPress={() => repLogin({ email, password })} />
                        </View>
                </View>

                <View style={styles.forgotPasswordPosition}>
                        <View style={styles.forgotPassword}>                    
                            <Button title='forgot rep password' onPress={() => navigation.navigate('RecoverPasswordScreen')} />
                        </View>
                </View>

                <View style={styles.becomeARepPosition}>
                        <View style={styles.becomeARep}>                    
                            <Button title='become a rep' onPress={() => navigation.navigate('RepSignUpScreen')} />
                        </View>
                </View>

                <BottomDrawer
                    containerHeight={70}
                    backgroundColor='darkblue'
                    shadow={true}
                    startUp={true}

                >       
                    <Button title="<<< baaack" onPress={() => navigation.navigate('LoginScreen')} />
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
    
    repLoginButtonPosition: {
        marginTop: 20,
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

    becomeARepPosition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    becomeARep: {
    },

    

});

export default RepLoginScreen;