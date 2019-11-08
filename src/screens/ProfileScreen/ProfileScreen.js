import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, Clipboard } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'

import BottomDrawer from 'rn-bottom-drawer';

import { navigate } from '../../navigationRef';


import { Context as AuthContext } from '../../context/AuthContext';

const ProfileScreen = ({navigation}) => {

    const { state, repPlatform } = useContext(AuthContext);

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Header />
        <View style={styles.infoBoxPosition}>

            <View style={styles.infoBox}>

                <Text style={styles.profileInitials}>Contact details:</Text>
                <View ></View>
                <Text style={styles.profileValues}>City:</Text>
                <Text style={styles.profileValues}>E-mail address:</Text>
                <Text style={styles.profileInitials}>Renewal date:</Text>
                <Text>+++ CHANGE PASSWORD+++</Text>

                <Text style={styles.profileInitials}>Cancel subscription:</Text>

                <View style={styles.profilePanelTextBoxPosition}>
                    <Text style={styles.profilePanelTextBox} >stuff{ state.userObject.linkId }</Text>
                </View>

            </View>

        </View>


        <BottomDrawer
            containerHeight={70}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< baaack" onPress={() => navigate('DealsScreen')} />
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
        fontSize: 18,
        fontWeight: '800',
    },
    profileValues: {
        fontSize: 18,
        fontWeight: '400',
    },


    profilePanelTextBoxPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profilePanelTextBox: {
        paddingTop: 2,
        textAlign: 'center',
        fontSize: 16,
        color:  'red',
        height: 28,
        width: 228,
        borderColor: 'black',
        borderWidth: 2,
        // backgroundColor: '#ECECEC',
        backgroundColor: 'yellow',
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



});

export default ProfileScreen;