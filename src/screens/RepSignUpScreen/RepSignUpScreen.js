import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const RepSigUpScreen = ({navigation}) => {
    
    
        return (

            <ImageBackground source={backimage} style={styles.container}>
                <View style={styles.logoPosition}>
                    <OverheardDealsLogo />
                </View>


                <View style={styles.firstNameTextInputPosition}>
                    <TextInput
                        style={styles.firstNameTextInput}
                        label='first name'
                        placeholder='first name'
                        placeholderTextColor='#ababab'
                        keyboardAppearance='dark'
                        keyboardType='default'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>

                
                <View style={styles.lastNameTextInputPosition}>
                    <TextInput
                        style={styles.lastNameTextInput}
                        label='last name'
                        placeholder='last name'
                        placeholderTextColor='#ababab'
                        keyboardAppearance='dark'
                        keyboardType='default'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>


                <View style={styles.emailTextInputPosition}>
                    <TextInput
                        style={styles.emailTextInput}
                        label='email'
                        placeholder='email'
                        placeholderTextColor='#ababab'
                        keyboardAppearance='dark'
                        keyboardType='email-address'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>


                <View style={styles.selectUniPosition}>
                    <TextInput
                        style={styles.selectUni}
                        label='select your uni'
                        placeholder='select your uni'
                        placeholderTextColor='#ababab'
                        keyboardAppearance='dark'
                    />
                </View>
                

                <View style={styles.phoneTextInputPosition}>
                    <TextInput
                        style={styles.phoneTextInput}
                        label='phone'
                        placeholder='phone'
                        placeholderTextColor='#ababab'
                        keyboardAppearance='dark'
                        keyboardType='default'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                        secureTextEntry={true}
                    />
                </View>


                <View style={styles.signUpButtonPosition}>
                        <View style={styles.signUpButton}>                    
                            <Button title='Sig Up' onPress={() => navigation.navigate('DealsScreen')} />
                        </View>
                </View>

                
            </ImageBackground>

        );

    
};

RepSigUpScreen.navigationOptions = () => {
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

    firstNameTextInputPosition: {
        marginTop: 37,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    firstNameTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    lastNameTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    lastNameTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    emailTextInputPosition: {
        marginTop: 10,
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

    selectUniPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectUni: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },

    phoneTextInputPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    phoneTextInput: {
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    
    signUpButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signUpButton: {
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


export default RepSigUpScreen;