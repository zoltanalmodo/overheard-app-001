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
            currentPage={9}
            swipeThreshold={0.2}
        >

            <Text>index [0]</Text>
            <Text>index [1]</Text>
            <Text>index [2]</Text>
            <Text>index [3]</Text>

            <Text>index [4]</Text>
            <Text>index [5]</Text>
            <Text>index [6]</Text>
            <Text>index [7]</Text>

            <Text>index [8]</Text>
            <Text>index [9]</Text>
            <Text>index [10]</Text>
            <Text>index [11]</Text>

            <Text>index [12]</Text>
            <Text>index [13]</Text>
            <Text>index [14]</Text>
            <Text>index [15]</Text>

            <Text>index [16]</Text>
            <Text>index [17]</Text>
            <Text>index [18]</Text>
            <Text>index [19]</Text>


            <Text>index [20]</Text>
            <Text>index [21]</Text>
            <Text>index [22]</Text>
            <Text>index [23]</Text>

            <Text>index [24]</Text>
            <Text>index [25]</Text>
            <Text>index [26]</Text>
            <Text>index [27]</Text>

            <Text>index [28]</Text>
            <Text>index [29]</Text>
            <Text>index [30]</Text>
            <Text>index [31]</Text>

            <Text>index [32]</Text>
            <Text>index [33]</Text>
            <Text>index [34]</Text>
            <Text>index [35]</Text>

            <Text>index [36]</Text>
            <Text>index [37]</Text>
            <Text>index [38]</Text>
            <Text>index [39]</Text>

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