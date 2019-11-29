import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';



const HeaderButtons = ({navigation}) => {

    const { displayPopUpDealsMenu, displayPopUpProfile } = useContext(AuthContext);
    
    // const [Categories, setCategories] = useState('');


    return (

        <View style={styles.topNavBar}>

            <TouchableOpacity style={styles.touchableOpacity}
                            
            // = TEST =======================================

                    onPress={ () => displayPopUpDealsMenu() }

                    // Filter Deals => return =>
                    // Carousel with filtered list()}

            // = TEST =======================================

            >
                                
                <View style={styles.categoriesButtonBox}>
                    <Text style={styles.buttonText}>Deals Menu</Text>
                </View>

            </TouchableOpacity>

            {/* <View style={styles.categoriesButtonBox}>
                <ModalDropdown
                    defaultValue={'Deals Menu'}

                    onSelect = {(newCategories) => setCategory(
                        newCategories === '0' ? 'Alcohol' :
                        newCategories === '1' ? 'Events & Festivals' :
                        newCategories === '2' ? 'Fashion & Shopping' :
                        newCategories === '3' ? 'Food & Drink' :
                        newCategories === '4' ? 'Hair & Beauty' :
                        newCategories === '5' ? 'Health & Fitness' :
                        newCategories === '6' ? 'Lifestyle' :
                        newCategories === '7' ? 'Taxis & Cars' :
                        newCategories === '8' ? 'Technology' :
                        newCategories === '9' ? 'All Deals' :
                        'error setCategories'
                    )}


                    options={[
                        'Alcohol',
                        'Events & Festivals',
                        'Fashion & Shopping',
                        'Food & Drink',
                        'Hair & Beauty',
                        'Health & Fitness',
                        'Lifestyle',
                        'Taxis & Cars',
                        'Technology',
                        'All Deals',
                    ]}
                    
                    textStyle={styles.modalButtonText}
                    
                    dropdownStyle={styles.modalDropdownDropdownBox}
                    dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                />
            </View> */}

            

            
            <TouchableOpacity style={styles.touchableOpacity}
                            
                
                onPress={ () => displayPopUpProfile() }


                // onPress={ () => display overlay profile panel =>
                // return => Profile panel content



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