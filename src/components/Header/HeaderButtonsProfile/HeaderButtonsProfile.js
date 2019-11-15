import React, { useState, useContext }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import { Context as AuthContext } from '../../../context/AuthContext';

import { navigate } from '../../../navigationRef';


const HeaderButtonsProfile = ({navigation}) => {

    const { state, setCategory } = useContext(AuthContext);
    
    // const [Categories, setCategories] = useState('');


    return (
        <View style={styles.topNavBar}>

                    
            
            <TouchableOpacity style={styles.touchableOpacity}
                            
                onPress={ () => navigate('ProfileScreen')}
            
            >

                    
                    <View style={styles.buttonBox}>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    

    categoriesButton: {
        height: 36,
        width: 101,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
        top: 1,
    },

    modalButtonText: {
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5,
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


    buttonBox: {
        height: 36,
        width: 101,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
        top: 1,
    },

    buttonText: {
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5,
    },
});

export default HeaderButtonsProfile;