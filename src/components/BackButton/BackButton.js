import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';


import { navigate } from '../../navigationRef';
import backicon from '../../img/back-icon.png';


const BackButton = (props) => {

    return (

        <TouchableOpacity style={styles.touchableBackButton}                            
            onPress={() => navigate(props.navigate)} >

            <View style={styles.backButtonPosition}>
                <Image source={backicon} style={styles.backicon}/>
            </View>
        </TouchableOpacity>
    
    )

};


const styles = StyleSheet.create({

    backButtonPosition: {
        marginTop: 0,
        position: 'absolute',
        textAlign: 'right',
        zIndex: 55,
        width: 80,
        height: 30,

        // borderWidth: 2,
        // borderColor: 'blue',
    },
    backicon: {
        marginLeft: 15,
        width: 30,
        height: 30,
        zIndex: 88,
    },

});

export default BackButton;