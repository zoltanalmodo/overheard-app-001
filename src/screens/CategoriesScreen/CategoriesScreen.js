import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'

const CategoriesScreen = () => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.categoriesScreenText}>Categories Screen</Text>
        
    </ImageBackground>
    )
};

CategoriesScreen.navigationOptions = () => {
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
      categoriesScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});

export default CategoriesScreen;