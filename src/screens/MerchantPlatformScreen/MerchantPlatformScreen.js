import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';



import backimage from '../../img/newbg.png';
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';


import { Context as AuthContext } from '../../context/AuthContext';


// repObject: action.payload.repObject

const MerchantPlatformScreen = ({navigation}) => {

    const { state, LogOut } = useContext(AuthContext);

    return (

        <ImageBackground source={backimage} style={styles.container}>

            <View style={styles.logoPosition}>
                <OverheardDealsLogo />
            </View>

            <View style={styles.repPlatformTitleBoxPosition}>
                <View style={styles.repPlatformTitleBox}>                    
                    <Text style={styles.repPlatformTitleText}>Merchant Stats</Text>
                </View>
            </View>
            
            <View style={styles.repPlatformTextBoxPosition}>

                <View style={styles.repPlatformTextBox}>

                    <View style={styles.repPlatformStatsPosition}>

                        <View style={styles.repPlatformStats}>
                            <Text style={styles.statsTextLeft} >Name:</Text>
                            <Text style={styles.statsTextRight} >{ state.merchantObject.name }</Text>
                        </View>

                        <View style={styles.repPlatformStats}>
                            <Text style={styles.statsTextLeft} >Deal:</Text>
                            <Text style={styles.statsTextRight} >{ state.merchantObject.deal }</Text>
                        </View>

                        <View style={styles.repPlatformStats}>
                            <Text style={styles.statsTextLeft} >Email:</Text>
                            <Text style={styles.statsTextRight} >{ state.merchantObject.email }</Text>
                        </View>

                        <View style={styles.repPlatformStats}>
                            <Text style={styles.statsTextLeft} >Sales:</Text>
                            <Text style={styles.statsTextRight} >{ state.merchantObject.sales }</Text>
                        </View>

                    </View>
            
                </View>

            </View>

            <TouchableOpacity

    // CHANGE THIS TO INVOKE (navigate to) QR CODE READER module => BarcodeScannerFunctional.js
                onPress={() => navigation.navigate('BarcodeScannerFunctional') }     
            >                 
                <View style={styles.scanButtonPosition}>
                    <Text style={styles.orangeButton}>Scan QR Code</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => LogOut()} 
                
            >                    
                <View style={styles.logOutButtonPosition}>
                    <Text style={styles.blackButton}>Log Out</Text>

                </View>
            </TouchableOpacity>

        </ImageBackground>
    );
};

MerchantPlatformScreen.navigationOptions = () => {
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
    logoPosition: {
        marginTop: 42,
    },
    
    repPlatformTitleBoxPosition: {
        marginTop: 42,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1,
    },
    repPlatformTitleBox: {
        width: 270,
        height: 50,
        marginBottom: 0,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        
    },
    repPlatformTitleText: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        paddingTop: 12,
        color: 'black',
    },
    

    repPlatformTextBoxPosition: {
        marginTop: -25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    repPlatformTextBox: {
        width: 355,
        height: 280,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        paddingTop: 45,
    },


    repPlatformTextTop: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },


    repPlatformStatsPosition: {
        width: 270,
        paddingTop: 10,
        marginLeft: 40,
        marginLeft: 40,

    },
    repPlatformStats: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    statsTextLeft: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'left',
        color: 'blue',
    },
    statsTextRight: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'right',
        color: 'red',
    },

    uniqueRepLinkTextBoxPosition: {
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    uniqueRepLinkTextBox: {
        paddingTop: 12,
        textAlign: 'center',
        fontSize: 16,
        color:  'black',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
    },
    uniqueRepLinkText: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#ababab',
    },

    // BUTTON styling ========================================================

    scanButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    logOutButtonPosition: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    orangeButton: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
        height: 50,
        width: 270,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },

    blackButton: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'white',
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'black',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },
    
});

export default MerchantPlatformScreen;