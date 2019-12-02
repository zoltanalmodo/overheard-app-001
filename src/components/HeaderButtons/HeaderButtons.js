import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';



const HeaderButtons = ({navigation}) => {

    const { displayPopUpDealsMenu, displayPopUpProfile } = useContext(AuthContext);
    


    return (

        <View style={styles.topNavBar}>

            <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => displayPopUpDealsMenu() }
            >
                                
                <View style={styles.categoriesButtonBox}>
                    <Text style={styles.buttonText}>Deals Menu</Text>
                </View>

            </TouchableOpacity>

        
                    
            <TouchableOpacity style={styles.touchableOpacity}           
                onPress={ () => displayPopUpProfile() }
            >
                    
                <View style={styles.profileButtonBox}>
                    <Text style={styles.buttonText}>Profile</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    topNavBar: {
        height: 36,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    
// Buttons styling   ==================start

    categoriesButtonBox: {
        height: 36,
        width: 111,
        top: 1,
        marginLeft: 0,

        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 0,
        
        borderColor: 'black',
        
    },

    profileButtonBox: {
        height: 36,
        width: 111,
        top: 1,
        marginRight: 0,

        borderTopWidth: 2,
        borderRightWidth: 0,
        borderLeftWidth: 2,
        
        borderColor: 'black',
        
    },

    buttonText: {
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5,
    },

// Buttons styling   ====================end



// Pop Up panel stylinng    ===========start

    modalButtonText: {
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5,

        color: 'black',

    },

    modalDropdownDropdownBox: {
        width: 252,
        height: 500,
        borderColor: 'black',
        backgroundColor: 'hsla(157, 70%, 84%, 0.89)',
        borderWidth: 2,
        marginLeft: -2,
        marginTop: 7,
    },

    modalDropdownDropdownTextStyle: {
        textAlign: 'left',
        paddingLeft: 10,
        fontSize: 24,
        backgroundColor: 'hsla(157, 70%, 84%, 0.01)',
        fontWeight: '800',
        color: 'black',
        
    },

    dropdownTextHighlightStyle: {
        textAlign: 'left',
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: '800',
        color: 'white',
        backgroundColor: 'black',
        
    },

// Pop Up panel stylinng    =============end

});

export default HeaderButtons;