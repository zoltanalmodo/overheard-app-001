import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import backimage from '../../img/newbg.png';

import Carousel from 'react-native-looped-carousel';



//https://github.com/machadogj/react-native-carousel-control

const ReactNativeLoopedCarousel = () => {

    

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.mapUserCenteredScreenText}>ReactNativeCarouselControl</Text>

        <Carousel
          delay={2000}
          loop={true}
          style={styles.carousel}
          pageInfo
          onAnimateNextPage={p => console.log(p)}>
          <View style={styles.item001}>
            <Text>0</Text>
          </View>
          <View style={styles.item002}>
            <Text>1</Text>
          </View>
          <View style={styles.item003}>
            <Text>2</Text>
          </View>
          <View style={styles.item004}>
            <Text>3</Text>
          </View>
        </Carousel>

        

    </ImageBackground>
    )
};

ReactNativeLoopedCarousel.navigationOptions = () => {
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

    item001: {
        backgroundColor: 'cyan',
        margin: 10,
        width: 139,
        height: 200,
    },
    item002: {
        backgroundColor: 'magenta',
        margin: 10,
        width: 139,
        height: 200,
    },
    item003: {
        backgroundColor: 'yellow',
        margin: 10,
        width: 139,
        height: 200,
    },
    item004: {
        backgroundColor: 'green',
        margin: 10,
        width: 139,
        height: 200,
    },

    carousel: {
        
        width: '100%',
        height: 200,
    },
    

     

});

export default ReactNativeLoopedCarousel;