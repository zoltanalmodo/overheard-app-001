import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import Overlay from 'react-native-modal-overlay';

import backimage from '../../img/newbg.png';



import { Context as AuthContext } from '../../context/AuthContext';



const ReactNativeModalOverlayStateless = () => {
  

    const { state, displayPopUp, hidePopUp } = useContext(AuthContext);

    console.log(state.displayPopUp);


    return (

        

        <ImageBackground source={backimage} style={styles.container}>

            <View style={styles.modalOverlayPosition}>
                <Overlay
                    visible={ state.displayPopUp }
                    onClose={ () => hidePopUp() }
                    closeOnTouchOutside

                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}

                    animationType={'fadeInDown'}
                    animationOutType={'fadeOutUp'}
                >

                    <Text style={styles.qrContentText}>======================24</Text>
                    <Text style={styles.qrContentText}>======================24</Text>
                    <Text style={styles.qrContentText}>======================24</Text>
                    <Text style={styles.qrContentText}>======================24</Text>

                </Overlay>
            </View>

            <TouchableOpacity style={styles.touchableOpacity}
                            
                onPress={ () => displayPopUp() }
            
            >

                <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>Profile</Text>
                </View>

            </TouchableOpacity>

        </ImageBackground>

        

    )
  

};

ReactNativeModalOverlayStateless.navigationOptions = () => {
    return {
        header: null
    };
};



const styles = StyleSheet.create({

    container: {

        flexDirection: 'column',
        justifyContent: 'center',

        // borderWidth: 2,
        // borderColor: 'orange',

        marginTop: 33,
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },

    modalOverlayPosition: {

        flexDirection: 'column',
        justifyContent: 'center',

        // borderColor: 'red',
        // borderWidth: 2,

        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },



    containerStyle: {

        backgroundColor: 'hsla(0, 0%, 96%, 0.55)',

        flexDirection: 'row',
        justifyContent: 'center',

        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,

        
        height: '100%',
    },


    childrenWrapperStyle: {
        
        marginTop: '20%',

        width: 260,
        height: 520,

        backgroundColor: 'hsla(157, 71%, 84%, 0.69)',

        borderWidth: 1,
        borderColor: 'gray',

    },

    qrContentText: {
        
        fontWeight: '800',

        // borderColor: 'cyan',
        // borderWidth: 1,

        // backgroundColor: 'yellow',
        width: 260,

        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,

    },


});

export default ReactNativeModalOverlayStateless;