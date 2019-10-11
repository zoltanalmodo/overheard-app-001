import React from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import BottomDrawer from 'rn-bottom-drawer';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'
import DealsList from '../../components/DealsList/DealsList'

const DealsScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <View style={styles.header}>
            <Header />
        </View>

        <DealsList style={styles.list}/>

        <BottomDrawer
            containerHeight={70}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< baaack" onPress={() => navigation.navigate('LoginScreen')} />
        </BottomDrawer>
        
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
        marginTop:33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },

      header: {
        zIndex: 33,
      },

      list: {
          backgroundColor: 'yellow',
          zIndex: 1,
      }
});

export default DealsScreen;