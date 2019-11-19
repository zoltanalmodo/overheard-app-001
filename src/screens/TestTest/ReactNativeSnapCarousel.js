import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import backimage from '../../img/newbg.png'


import Carousel from 'react-native-snap-carousel';



export class ReactNativeSnapCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>title</Text>
            </View>
        );
    }

    render () {
        return (

            <View style={styles.carouselPosition}>
                <Carousel
                    layout={'default'}
                    ref={(c) => { this._carousel = c; }}
                    data={[ 'item001', 'item002', 'item003', 'item004' ]}
                    renderItem={this._renderItem}
                    sliderWidth={300}
                    itemWidth={140}

                />
            </View>




        );
    }
}



const styles = StyleSheet.create({


    // Test
    
    slide: {
        width: 140,
        height: 200,
        backgroundColor: 'yellow'
    },



    // Test

    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
      centeredScreenText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 24,
        fontWeight: '600',
        color: 'blue',
    },

    

    testPanel001: {
        width: 246,
        height: 246,
        backgroundColor: 'magenta',

        borderWidth: 2,
        borderColor: 'blue',
    },

    testPanel002: {
        width: 246,
        height: 246,
        backgroundColor: 'cyan',

        borderWidth: 2,
        borderColor: 'green',
    },

});