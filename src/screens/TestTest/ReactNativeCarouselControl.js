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
                height: 250,
            } }
            // pageWidth={300}
            sneak={23}
            // initialPage={3}
            // currentPage={3}
            swipeThreshold={0.05}
        >


        {/* index [0] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [0]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [0]</Text>
                </View>
            </View>
            
            
        {/* index [1] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [1]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [1]</Text>
                </View>
            </View>
            

        {/* index [2] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [2]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [2]</Text>
                </View>
            </View>


        {/* index [3] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [3]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [3]</Text>
                </View>
            </View>


        {/* index [4] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [4]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [4]</Text>
                </View>
            </View>


        {/* index [5] */}
        <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [5]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [5]</Text>
                </View>
            </View>


        {/* index [6] */}
            <View style={styles.carouselBox}>
                <View style={styles.dealTestBox001}>
                    <Text>index [6]</Text>
                </View>

                <View style={styles.dealTestBox002}>
                    <Text>index [6]</Text>
                </View>
            </View>



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
        fontSize: 24,
        fontWeight: '800',
        color: 'salmon',
    },

    carouselBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dealTestBox001: {
        width: 139,
        height: 246,

        backgroundColor: 'magenta',
    },
    dealTestBox002: {
        width: 139,
        height: 246,

        backgroundColor: 'blue',
    },

});

export default ReactNativeCarouselControl;