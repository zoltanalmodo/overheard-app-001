import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'

import BottomDrawer from 'rn-bottom-drawer';

import { navigate } from '../../navigationRef';

const ProfileScreen = ({navigation}) => {
    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Header />
        <View style={styles.infoBoxPosition}>
            <View style={styles.infoBox}>
                <Text>Contact details:</Text>
            </View>

        </View>


        <BottomDrawer
            containerHeight={70}
            backgroundColor='darkblue'
            shadow={true}
            startUp={true}
        >       
            <Button title="<<< baaack" onPress={() => navigate('DealsScreen')} />
        </BottomDrawer>
        
    </ImageBackground>
    )
};

ProfileScreen.navigationOptions = () => {
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

    

    infoBoxPosition: {
        marginTop: 0,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
                

    },
    infoBox: {
        width: 252,
        height: 500,
        fontSize: 24,
        backgroundColor: '#FEF3BA',
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',

    },


});

export default ProfileScreen;