import React, { useState, useContext } from 'react';
import { StyleSheet, ImageBackground, Dimensions, View, Text } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'
import ReactNativeSnapCarousel from '../../components/ReactNativeSnapCarousel/ReactNativeSnapCarousel.js'

import { Context as AuthContext } from '../../context/AuthContext';


import Overlay from 'react-native-modal-overlay';


const deviceDisplayWidth = Dimensions.get('window').width;

// ===== COMPONENT =====

    const DealsScreen = ({navigation}) => {


        const { state, displayPopUp, hidePopUp } = useContext(AuthContext);

        return (
            
        <ImageBackground source={backimage} style={styles.container} >

            <Header />

            <Overlay

                containerStyle={styles.containerStyle}

                visible={ state.displayPopUp }

                onClose={ () => hidePopUp() }
                
                closeOnTouchOutside

                childrenWrapperStyle={styles.childrenWrapperStyle}

                // animationType={'fadeInDown'}
                // animationOutType={'fadeOutUp'}

                animationType={'zoomIn'}
                animationOutType={'zoomOut'}
                >
                <View style={styles.cardContentCenter}>

                    <Text style={styles.cardPopUpContentText}>========================</Text>
                    <Text style={styles.cardPopUpContentText}>========================</Text>
                    <Text style={styles.cardPopUpContentText}>========= DEAL =========</Text>
                    <Text style={styles.cardPopUpContentText}>========= CARD =========</Text>
                    <Text style={styles.cardPopUpContentText}>======== POP UP ========</Text>
                    <Text style={styles.cardPopUpContentText}>========================</Text>
                    <Text style={styles.cardPopUpContentText}>========================</Text>

                </View>

            </Overlay>

            

            <ReactNativeSnapCarousel />
            
        </ImageBackground>
        )
    };



DealsScreen.navigationOptions = () => {
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
    
    containerStyle: {

        backgroundColor: 'hsla(120, 0%, 99%, 0.45)',

        flexDirection: 'column',
        justifyContent: 'center',

        alignText: 'center',

        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,

    },

    childrenWrapperStyle: {

        
        marginLeft: (deviceDisplayWidth / 2),
        left: -130,

        marginRight: (deviceDisplayWidth / 2),
        right: -130,
        

        width: 260,
        height: 520,

        backgroundColor: 'hsla(300, 71%, 100%, 1)',

        borderWidth: 1,
        borderColor: 'gray',
        position: 'absolute',

    },



});

export default DealsScreen;