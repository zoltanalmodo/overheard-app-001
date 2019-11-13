import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png'

import Carousel from "react-native-carousel-control";

//https://github.com/machadogj/react-native-carousel-control

const ReactNativeCarouselControl = () => {

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.mapUserCenteredScreenText}>ReactNativeCarouselControl</Text>

        <Carousel 
            pageStyle={ {
                backgroundColor: "yellow",
                width: 139,
                height: 260,
            } }
            pageWidth={300}
            sneak={20}
            currentPage={1}
            swipeThreshold={0.2}
        >

            <Text>index [0]</Text>
            <Text>index [1]</Text>
            <Text>index [2]</Text>
            <Text>index [3]</Text>
        </Carousel>
        

    </ImageBackground>
    )
};

ReactNativeCarouselControl.navigationOptions = () => {
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
      mapUserCenteredScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    },


});

export default ReactNativeCarouselControl;