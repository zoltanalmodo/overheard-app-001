import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Overlay from 'react-native-modal-overlay';

import backimage from '../../img/newbg.png';

import Header from '../../components/Header/Header'


import { Context as AuthContext } from '../../context/AuthContext';


const deviceDisplayWidth = Dimensions.get('window').width;

const ReactNativeModalOverlay = () => {
  

    const { state, displayPopUp, hidePopUp } = useContext(AuthContext);


    return (
        
        <ImageBackground source={backimage} style={styles.container}>

            <Header />

            <View style={styles.modalOverlayPosition}>


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
                        <Text style={styles.cardPopUpContentText}>========= TEST =========</Text>
                        <Text style={styles.cardPopUpContentText}>========================</Text>

                    </View>

                </Overlay>
                
            </View>

        </ImageBackground>
        
    )
  
};

ReactNativeModalOverlay.navigationOptions = () => {
    return {
        header: null
    };
};



const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: 'orange',

        marginTop: 33,
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,

    },

    modalOverlayPosition: {

        flexDirection: 'row',
        justifyContent: 'center',

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

        backgroundColor: 'hsla(157, 71%, 84%, 0.69)',

        borderWidth: 1,
        borderColor: 'gray',
        position: 'absolute',

    },

    
    cardContentCenter: {

    },


    cardPopUpContentText: {
        
        fontWeight: '800',

        // backgroundColor: 'yellow',

        width: 260,

        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

    },

    buttonText: {

        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
    }


});

export default ReactNativeModalOverlay;