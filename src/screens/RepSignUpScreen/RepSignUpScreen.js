import React, { useState, useContext }  from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';


import ModalDropdown from 'react-native-modal-dropdown';
import BottomDrawer from 'rn-bottom-drawer';


// signup backend
import { Context as AuthContext } from '../../context/AuthContext';
//


import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

const RepSigUpScreen = ({navigation}) => {
    
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        placeholderTextColor='black'
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
                        placeholderTextColor='black'
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
                        placeholderTextColor='black'
                        keyboardAppearance='dark'
                        keyboardType='email-address'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>

                <View style={styles.modalDropdownPosition}>
                    <ModalDropdown
                        defaultValue={'select your uni'}
                        options={['Cardiff', 'option 1', 'option 2', 'option 3']}
                        style={styles.modalDropdown}
                        textStyle={styles.modalDropdownText}
                        dropdownStyle={styles.modalDropdownDropdownBox}
                        dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                        dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                    />
                </View>
                
                
                <View style={styles.phoneTextInputPosition}>
                    <TextInput
                        style={styles.phoneTextInput}
                        label='phone'
                        placeholder='phone'
                        placeholderTextColor='black'
                        keyboardAppearance='dark'
                        keyboardType='phone-pad'
                        returnKeyType='done'
                        clearTextOnFocus={true}
                    />
                </View>


                <View style={styles.signUpButtonPosition}>
                        <View style={styles.signUpButton}>                    
                            <Button title='Sign Up' onPress={() => signup({ email, password })} />
                        </View>
                </View>


                <BottomDrawer
                    containerHeight={70}
                    backgroundColor='darkblue'
                    shadow={true}
                    startUp={true}
                >       
                    <Button title="<<< baaack" onPress={() => navigation.navigate('RepLoginScreen')} />
                </BottomDrawer>
                
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

    modalDropdownPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalDropdown: {
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    modalDropdownText: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    modalDropdownDropdownBox: {
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        margin: -2,
    },
    modalDropdownDropdownTextStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        backgroundColor: '#ECECEC',
        left: -2,
    },
    dropdownTextHighlightStyle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '800',
        color: 'white',
        backgroundColor: 'black',
        left: -2,
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

      
});


export default RepSigUpScreen;