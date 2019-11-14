import React, { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Button, Text } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'
import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js'

import { Context as AuthContext } from '../../context/AuthContext';

const ConfirmRepPlatformScreen = ({navigation}) => {

    const { state, repPlatform } = useContext(AuthContext);

    return (

    <ImageBackground source={backimage} style={styles.container}>
        <View style={styles.logoPosition}>
            <OverheardDealsLogo />
        </View>

        <View style={styles.repPlatformTitleBoxPosition}>
            <View style={styles.repPlatformTitleBox}>                    
                <Text style={styles.repPlatformTitleText} >Rep platform</Text>
            </View>
        </View>
        
        <View style={styles.repPlatformTextBoxPosition}>
            <View style={styles.repPlatformTextBox}>
                <Text style={styles.repPlatformTextTop}>Your sales stats</Text>


                <View style={styles.repPlatformStatsPosition}>
                    <View style={styles.repPlatformStats}>
                        <Text style={styles.statsTextLeft} >Sales:</Text>
                        <Text style={styles.statsTextRight} >{ state.repObject.referrals}</Text>
                    </View>

                    {/* <View style={styles.repPlatformStats}>
                        <Text style={styles.statsTextLeft} >Link click:</Text>
                        <Text style={styles.statsTextRight} >{ state.repObject.first}</Text>
                    </View> */}

                    <View style={styles.repPlatformStats}>
                        <Text style={styles.statsTextLeft} >Commission earned:</Text>
                        <Text style={styles.statsTextRight} >£ { state.repObject.referrals *2.5 }</Text>
                    </View>
                </View>
                

                <View style={styles.uniqueRepLinkTextBoxPosition}>
                    <Text style={styles.uniqueRepLinkTextBox} >*** PARTY ***</Text>
                </View>
            </View>   
        </View>

{/* kok */}

        <View style={styles.repLinkCopiedButtonPosition}>
            <View style={styles.repLinkCopiedButton}>                    
                               
                <Button title=" <<< back to Login" onPress={() => navigation.navigate('RepLoginScreen')} />

{/* kok - state.errorMessage:'' */}               
                
            </View>
        </View>

        <BottomDrawer
            containerHeight={90}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< log out >>>" onPress={() => navigation.navigate('#')} />
        </BottomDrawer>

        
    </ImageBackground>

    )
};

ConfirmRepPlatformScreen.navigationOptions = () => {
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
        marginTop: 52,
    },
    
    repPlatformTitleBoxPosition: {
        marginTop: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1,
    },
    repPlatformTitleBox: {
        width: 270,
        height: 50,
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
        backgroundColor: '#B8F3DC',
        borderWidth: 2,
        borderColor: 'black',
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

    repLinkCopiedButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    repLinkCopiedButton: {
        height: 50,
        width: 270,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#B8F3DC',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    repLinkCopiedButtonText: {
        color: 'black',
        paddingTop: 6,
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
    },
});

export default ConfirmRepPlatformScreen;