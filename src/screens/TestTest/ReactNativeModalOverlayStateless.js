import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

import Overlay from 'react-native-modal-overlay';

import backimage from '../../img/newbg.png';



import QRCode from 'react-native-qrcode-svg';

import { Context as AuthContext } from '../../context/AuthContext';







const ReactNativeModalOverlayStateless = () => {
  

    const { state, repPlatform } = useContext(AuthContext);
  


    // onClose = () => this.statehere({ modalVisible: false});

    // statehere = {
    //     modalVisible: true,
    // }

    let stateNow = {
        modalVisible: true, 
      }
      
    onClose = () => {
        stateNow.modalVisible = !stateNow.modalVisible
    };

  
    return (

        

        <ImageBackground source={backimage} style={styles.container}>

            <View style={styles.modalOverlayPosition}>
                <Overlay
                    visible={stateNow.modalVisible}
                    onClose={this.onClose}
                    closeOnTouchOutside

                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}

                    animationType={'bounceIn'}
                    animationOutType={'bounceOut'}
                >

                    <Text>======================24</Text>
                    <Text>======================24</Text>
                    <Text>======================24</Text>
                    <Text>======================24</Text>

                </Overlay>
            </View>

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

        backgroundColor: 'hsla(0, 0%, 80%, 0.33)',

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


});

export default ReactNativeModalOverlayStateless;