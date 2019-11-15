import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png';
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';

import { Context as AuthContext } from '../../context/AuthContext';


const ResetRepPasswordScreen = ({navigation}) => {

    const { state, resetRepPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');

    return (

    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>
        
        <View style={styles.emailTextInputPosition}>
            <TextInput
                value={email}
                onChangeText = {(newEmail) => setEmail(newEmail)}

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


        {state.errorMessage ?
                
            <Text style={styles.errorMessage}>
            
                {state.errorMessage}

            </Text> : null}



        <View style={styles.resetRepPasswordButtonPosition}>
            <View style={styles.resetRepPasswordButton}>                    
                <Button
                    title='Reset Rep Password'
                    onPress={ () => resetRepPassword ( { email } ) }
                />
            </View>
        </View>

        
        <BottomDrawer
            containerHeight={90}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< back" onPress={() => navigation.navigate('RepLoginScreen')} />
        </BottomDrawer>
        

    </ImageBackground>

    )
};

ResetRepPasswordScreen.navigationOptions = () => {
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
        marginTop: 122,
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

    errorMessage: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 18,
        color: 'red',
    },

    resetRepPasswordButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resetRepPasswordButton: {
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

export default ResetRepPasswordScreen;