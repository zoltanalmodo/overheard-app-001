import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

import backimage from '../../img/newbg.png'

import { FlatList } from 'react-native-gesture-handler';


// ============================== test

import Carousel from 'react-native-snap-carousel';


// ============================== test


const ReactNativeSnapCarousel2222 = () => {


    const deviceDisplayWidth = Dimensions.get('window').width;

    _renderFirstRow = ({item, index}) => {
        return (
            <View style={styles.slideFirst}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    
    _renderSecondRow = ({item, index}) => {
        return (
            <View style={styles.slideSecond}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };


    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.centeredScreenText}>React Native Snap Carousel2222</Text>

        <Carousel
        // 001
            // ref={(c) => { this._carousel = c; }}
            data={[
                {   title: 'item_000',
                    width: 140,
                },
                {   title: 'item_001',
                    width: 140,
                },
                {   title: 'item_002',
                    width: 140,
                },
                {   title: 'item_003',
                    width: 140,
                },
                {   title: 'item_004',
                    width: 140,
                },
            ]}
            renderItem={this._renderFirstRow}

            sliderWidth={deviceDisplayWidth}
            

            itemWidth={140}
            itemHeight={280}
            layout={'default'}
            firstItem={2}

            enableSnap={true}
            loop={true}
            contentContainerCustomStyle={
                {
                    // backgroundColor: 'pink',
                    height: 280,

                    // borderWidth: 2,
                    // borderColor: 'red',

                }
            }


        />


        
        <Carousel
        // 002
            // ref={(c) => { this._carousel = c; }}
            data={[
                {   title: 'index_000',
                    width: 140,
                },
                {   title: 'index_001',
                    width: 140,
                },
                {   title: 'index_002',
                    width: 140,
                },
                {   title: 'index_003',
                    width: 140,
                },
                {   title: 'index_004',
                    width: 140,
                },
            ]}
            renderItem={this._renderSecondRow}


            sliderWidth={deviceDisplayWidth}
            itemWidth={140}
            itemHeight={280}
            layout={'default'}

            firstItem={2}

            enableSnap={true}
            loop={true}

            contentContainerCustomStyle={
                {
                    // backgroundColor: 'lightgreen',
                    
                    height: 280,

                }
            }
        />

        
        
        
        

    </ImageBackground>
    )
};

ReactNativeSnapCarousel2222.navigationOptions = () => {
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

        flexDirection: 'column',
        justifyContent: 'flex-start',

      },
      centeredScreenText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 24,
        fontWeight: '600',
        color: 'blue',
    },

    slideFirst: {
        width: 140,
        height: 280,

        backgroundColor: 'yellow',

        
    },

    slideSecond: {
        width: 140,
        height: 280,

        backgroundColor: 'lightblue',

        
    },



    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    }

});

export default ReactNativeSnapCarousel2222;