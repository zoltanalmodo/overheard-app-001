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

                <Text style={styles.profileInitials}>Contact Details:</Text>

                <Text style={styles.profileValues}>First Name:</Text>
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

                <Text style={styles.profileValues}>Renewal Date:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.expiryDate }</Text>
                </View>

                <Text style={styles.profileValues}>University:</Text>
                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >{ state.userObject.university }</Text>
                </View>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ConfirmProfileResetPasswordScreen')}
                    
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileButton}>Reset Password</Text>

                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ProfileWarningScreen')}
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileButton}>Cancel Subscription</Text>

                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('LoginScreen')}
                >                    
                    <View style={styles.profileButtonPosition}>
                        <Text style={styles.profileLogOutButton}>Log Out</Text>

                    </View>
                </TouchableOpacity>





                

            </View>

        </View>


        <BottomDrawer
            containerHeight={70}
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
        height: 500,
        fontSize: 24,
        backgroundColor: '#FEF3BA',
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
    },

    profileInitials: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '800',
    },
    profileValues: {
        marginTop: 4,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '400',
    },

    profilePanelTextBoxPosition: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profilePanelTextBox: {
        textAlign: 'center',
        fontSize: 14,
        color:  '#ababab',
        height: 30,
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
        marginTop: 15,
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