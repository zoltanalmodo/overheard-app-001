import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

import backimage from '../../img/newbg.png'
import HeaderProfile from '../../components/Header/HeaderProfile/HeaderProfile'


import { navigate } from '../../navigationRef';


import { Context as AuthContext } from '../../context/AuthContext';

const ProfileWarningScreen = ({navigation}) => {

    const { state, repPlatform } = useContext(AuthContext);

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <HeaderProfile />
        <View style={styles.infoBoxPosition}>

            <View style={styles.infoBox}>

                
                <View style={styles.profilePanelTextBoxPosition}>
                    
                    
                </View>
                <Text style={styles.profileValues}>
                    To Cancel Your Subscription From The Next Renewal Date Please Email Us At:
                </Text>
                <Text style={styles.profileValues}>
                    memberships@overheard.co.uk
                </Text>
                <Text style={styles.profileValues}>
                    With The Email You Used To Sign Up.
                </Text>




                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => navigate('ProfileScreen')}
                >
                    <View style={styles.okButtonPosition}>
                        <Text style={styles.okButton}>* OK *</Text>
                    </View>
                </TouchableOpacity>

                
            </View>

        </View>


        
    </ImageBackground>
    )
};

ProfileWarningScreen.navigationOptions = () => {
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
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400',
        color: 'red',
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

    okButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },



});

export default ProfileWarningScreen;