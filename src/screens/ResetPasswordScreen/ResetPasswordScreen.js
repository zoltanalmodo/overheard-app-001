import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png';
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';

import { Context as AuthContext } from '../../context/AuthContext';


const ResetPasswordScreen = ({navigation}) => {

    const { state, resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');

    return (

    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>
        
        {/* {console.log(state)}; */}

        <View style={styles.emailTextInputStylePosition}>
            <TextInput
                value={email}
                onChangeText = {(newEmail) => setEmail(newEmail)}

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


        {state.errorMessage ?
            
            <Text style={styles.errorMessage}>
            
                {state.errorMessage}

            </Text> : null}



        <View style={styles.resetPasswordButtonPosition}>
            <View style={styles.resetPasswordButton}>                    
                <Button
                    title='Reset password'
                    onPress={ () => resetPassword( { email } ) }
                />
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

    )
};

ResetPasswordScreen.navigationOptions = () => {
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

    errorMessage: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },

    resetPasswordButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resetPasswordButton: {
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

export default ResetPasswordScreen;