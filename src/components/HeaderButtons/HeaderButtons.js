import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

const HeaderButtons = () => {
    return (
        <View style={styles.topNavBar}>

            <View style={styles.categoriesButton}>
                <ModalDropdown
                    defaultValue={'Categories'}
                    options={[
                        'All deals',
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

                    renderSeparator={undefined}
                    dropdownTextStyle={styles.modalDropdownDropdownTextStyle}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                />
            </View>

            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>Deals Map</Text>
            </View>

            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>Profile</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    topNavBar: {
        height: 36,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        height: 'auto',
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
        left: -2,
    },

    dropdownTextHighlightStyle: {
        textAlign: 'left',
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: '800',
        color: 'white',
        backgroundColor: 'black',
        left: -2,
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

export default HeaderButtons;