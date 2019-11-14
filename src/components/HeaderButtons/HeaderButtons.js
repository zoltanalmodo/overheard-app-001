import React, { useState, useContext }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import { Context as AuthContext } from '../../context/AuthContext';

import { navigate } from '../../navigationRef';


const HeaderButtons = ({navigation}) => {

    const { state, setCategory } = useContext(AuthContext);
    
    // const [Categories, setCategories] = useState('');


    return (
        <View style={styles.topNavBar}>

            <View style={styles.categoriesButtonBox}>
                <ModalDropdown
                    defaultValue={'Deals menu'}

                    onSelect = {(newCategories) => setCategory(
                        newCategories === '0' ? 'Deals Menu' :
                        newCategories === '1' ? 'Alcohol' :
                        newCategories === '2' ? 'Events & Festivals' :
                        newCategories === '3' ? 'Fashion & Shopping' :
                        newCategories === '4' ? 'Food & Drink' :
                        newCategories === '5' ? 'Hair & Beauty' :
                        newCategories === '6' ? 'Health & Fitness' :
                        newCategories === '7' ? 'Lifestyle' :
                        newCategories === '8' ? 'Taxis & Cars' :
                        newCategories === '9' ? 'Technology' :
                        'error setCategories'
                    )}


                    options={[
                        'Deals Menu',
                        'Alcohol',
                        'Events & Festivals',
                        'Fashion & Shopping',
                        'Food & Drink',
                        'Hair & Beauty',
                        'Health & Fitness',
                        'Lifestyle',
                        'Taxis & Cars',
                        'Technology',
                    ]}
                    
                    textStyle={styles.modalButtonText}
                    
                    dropdownStyle={styles.modalDropdownDropdownBox}
                    dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                />
            </View>

            

            
            
            <TouchableOpacity style={styles.touchableOpacity}
                            
                onPress={ () => navigate('ProfileScreen')}
            
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
    

    categoriesButtonBox: {
        height: 36,
        width: 178,
        marginLeft: 10,


        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 2,
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


    profileButtonBox: {
        height: 36,
        width: 178,
        marginRight: 10,

        borderRightWidth: 2,
        borderLeftWidth: 0,
        borderTopWidth: 2,
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

export default HeaderButtons;