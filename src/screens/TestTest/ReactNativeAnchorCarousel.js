import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import backimage from '../../img/newbg.png'

import Carousel from 'react-native-anchor-carousel';
import { FlatList } from 'react-native-gesture-handler';

//https://github.com/machadogj/react-native-carousel-control

const ReactNativeAnchorCarousel = () => {


    renderItem = ({item, index}) => {
        const {backgroundColor} = item;
        return (

            <View>
            <TouchableOpacity style={[styles.item, {backgroundColor}]}
                            onPress={() => {
                                this._carousel.scrollToIndex(index);
                            }}>
                <View style={styles.testPanel001}>
                    <Text>testPanel-001</Text>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={[styles.item, {backgroundColor}]}
                onPress={() => {
                    this._carousel.scrollToIndex(index);
                }}>
                <View style={styles.testPanel002}>
                    <Text>testPanel-002</Text>
                </View>

            </TouchableOpacity>
            
            </View>
        )
    };


    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.centeredScreenText}>ReactNativeAnchorControl</Text>

        <Carousel style={styles.carousel}
                      data={'string-1'}
                      renderItem={this.renderItem}
                      itemWidth={150}
                      containerWidth={375} 
                      separatorWidth={100}
                      ref={(c) => {
                          this._carousel = c;
                      }}
		//pagingEnable={false}
            />

        
        
        

    </ImageBackground>
    )
};

ReactNativeAnchorCarousel.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({


    // Test
    
	    carousel: {
            height: 100,
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

    carouselBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

export default ReactNativeAnchorCarousel;