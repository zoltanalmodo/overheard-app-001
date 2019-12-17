import React, { useContext } from 'react';
import {

    View,
    StyleSheet,
    Image,
    TouchableOpacity 
        
        } from 'react-native';


import { navigate } from '../../navigationRef';
import backicon from '../../img/back-icon.png';

import { Context as AuthContext } from '../../context/AuthContext';



const BackButton = (props) => {

    // const { clearErrors } = useContext(AuthContext);


// ADD >  < action to onPress

    return (

        <TouchableOpacity style={styles.touchableBackButton}                            
            onPress = {() => navigate(props.navigate)} >


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
        zIndex: 99,
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