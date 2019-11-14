import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

import backimage from '../../img/newbg.png'
import HeaderProfile from '../../components/Header/HeaderProfile/HeaderProfile'

import BottomDrawer from 'rn-bottom-drawer';

import { navigate } from '../../navigationRef';


import { Context as AuthContext } from '../../context/AuthContext';

const ConfirmProfileResetPasswordScreen = ({navigation}) => {

    const { state } = useContext(AuthContext);


    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <HeaderProfile />
        <View style={styles.infoBoxPosition}>

            <View style={styles.infoBox}>
                
                <Text style={styles.profileValues}>
                    A link to reset
                </Text>
                <Text style={styles.profileValues}>
                    your password
                </Text>
                <Text style={styles.profileValues}>
                    has been
                </Text>
                <Text style={styles.profileValues}>
                    SENT to:
                </Text>

                <Text style={styles.profileValues}>{ state.userObject.email }</Text>

                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ProfileScreen')}
                >
                    <View style={styles.okButtonPosition}>
                        <Text style={styles.okButton}>* OK *</Text>
                    </View>
                </TouchableOpacity>



            </View>

        </View>


        {/* <BottomDrawer
            containerHeight={90}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< back" onPress={() => navigate('DealsScreen')} />
        </BottomDrawer> */}
        
    </ImageBackground>
    )
};

ConfirmProfileResetPasswordScreen.navigationOptions = () => {
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

    
    infoBoxPosition: {
        marginTop: 0,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    infoBox: {
        paddingTop: 120,
        width: 252,
        height: 454,
        fontSize: 24,
        backgroundColor: '#FEF3BA',
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
    },

    profileInitials: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '800',
    },
    profileValues: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400',
        color: 'blue',
        textAlign: 'center',
    },


    profilePanelTextBoxPosition: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profilePanelTextBox: {
        paddingTop: 3,
        textAlign: 'center',
        fontSize: 16,
        color:  '#ababab',
        height: 32,
        width: 228,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        
    },
    profilePanelText: {
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#ababab',
    },

    okButtonPosition: {
        paddingTop: 0,
        marginTop: 120,
        marginLeft: 10,
        textAlign: 'center',
        height: 30,
        width: 228,
        backgroundColor: 'black',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },

    okButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },

});

export default ConfirmProfileResetPasswordScreen;