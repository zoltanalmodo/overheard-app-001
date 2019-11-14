import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

import backimage from '../../img/newbg.png'
import HeaderProfile from '../../components/Header/HeaderProfile/HeaderProfile'

import BottomDrawer from 'rn-bottom-drawer';

import { navigate } from '../../navigationRef';


import { Context as AuthContext } from '../../context/AuthContext';

const ProfileScreen = ({navigation}) => {

    const { state, resetPassword } = useContext(AuthContext);

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <HeaderProfile />
        <View style={styles.infoBoxPosition}>

            <View style={styles.infoBox}>

                <Text style={styles.profileInitials}>Contact details:</Text>

                <Text style={styles.profileValues}>First name:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.first }</Text>
                </View>

                <Text style={styles.profileValues}>Surname:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.last }</Text>
                </View>

                <Text style={styles.profileValues}>E-mail address:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.email }</Text>
                </View>

                <Text style={styles.profileValues}>Renewal date:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.expiryDate }</Text>
                </View>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ConfirmProfileResetPasswordScreen')}
                    
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileButton}>Reset password</Text>

                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ProfileWarningScreen')}
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileButton}>Cancel subscription</Text>

                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('LoginScreen')}
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileLogOutButton}>Log out</Text>

                    </View>
                </TouchableOpacity>





                

            </View>

        </View>


        <BottomDrawer
            containerHeight={90}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< back" onPress={() => navigate('DealsScreen')} />
        </BottomDrawer>
        
    </ImageBackground>
    )
};

ProfileScreen.navigationOptions = () => {
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
        marginTop: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '400',
    },


    profilePanelTextBoxPosition: {
        marginTop: 5,
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

    profileButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 0,
        marginTop: 20,
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

    profileButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
    },

    profileLogOutButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',

    },



});

export default ProfileScreen;