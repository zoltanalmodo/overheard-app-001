import React from 'react';
import {
    View, Text, StyleSheet, ImageBackground,
    TouchableOpacity, Dimensions, FlatList, SafeAreaView
}
from 'react-native';

import backimage from '../../img/newbg.png'



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

    _renderThirdRow = ({item, index}) => {
        return (
            <View style={styles.slideThird}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    _renderFourthRow = ({item, index}) => {
        return (
            <View style={styles.slideFourth}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    const DATA = [
        
        {   
            content:
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
                    sliderHeight={280}

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

                            marginTop: 4,
                            marginBottom: 4,

                            flexGrow: 0,

                            // borderWidth: 2,
                            // borderColor: 'blue',

                        }
                    }


                />,
            title: 'carousel-001',
            id: '123-001'



        },

        {
            content: 
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
                    sliderHeight={280}



                    itemWidth={140}
                    itemHeight={280}

                    paddingLeft={0}

                    layout={'default'}

                    firstItem={1}

                    enableSnap={true}
                    loop={true}

                    // scrollEnabled={false}

                    contentContainerCustomStyle={
                        {
                            // backgroundColor: 'cyan',
                            
                            height: 280,

                            marginTop: 4,
                            marginBottom: 4,

                            flexGrow: 0,

                            

                        }
                    }

                    // containerCustomStyle={
                    //     {

                    //         borderWidth: 2,
                    //         borderColor: 'red',

                    //     }
                    // }
                />,
            title: 'carousel-002',
            id: '123-002'

        },

        {
            content: 
                <Carousel
                // 003
                    // ref={(c) => { this._carousel = c; }}
                    data={[
                        {   title: 'zapp_000',
                            width: 140,
                        },
                        {   title: 'zapp_001',
                            width: 140,
                        },
                        {   title: 'zapp_002',
                            width: 140,
                        },
                        {   title: 'zapp_003',
                            width: 140,
                        },
                        {   title: 'zapp_004',
                            width: 140,
                        },
                    ]}
                    renderItem={this._renderThirdRow}

                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={280}

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

                            marginTop: 4,
                            marginBottom: 4,

                            flexGrow: 0,

                            // borderWidth: 1,
                            // borderColor: 'grey',

                        }
                    }

                />,
            title: 'carousel-003',
            id: '123-003'
        },

        {
            content: 
                <Carousel
                // 004
                    // ref={(c) => { this._carousel = c; }}
                    data={[
                        {   title: 'stuff_000',
                            width: 140,
                        },
                        {   title: 'stuff_001',
                            width: 140,
                        },
                        {   title: 'stuff_002',
                            width: 140,
                        },
                        {   title: 'stuff_003',
                            width: 140,
                        },
                        {   title: 'stuff_004',
                            width: 140,
                        },
                    ]}
                    renderItem={this._renderFourthRow}

                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={280}

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

                            marginTop: 4,
                            marginBottom: 4,

                            flexGrow: 0,

                            // borderWidth: 1,
                            // borderColor: 'grey',

                        }
                    }

                />,
            title: 'carousel-004',
            id: '123-004'
        }
    ];

    function Item({ content }) {
        return (
          <View>
            <View>{content}</View>
          </View>
        );
      }

    return (
    <ImageBackground source={backimage} style={styles.container}>
        
        <Text style={styles.centeredScreenText}>React Native Snap Carousel2222</Text>



        <SafeAreaView style={styles.safeAreaContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item content={item.content} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>



        
        
        
        
        
        

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
        // flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,

        flexDirection: 'column',
        justifyContent: 'flex-start',

      },

    container: {
        flex: 1,
    },

    centeredScreenText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 10,
        fontWeight: '400',
        color: 'purple',
    },



    slideFirst: {
        width: 140,
        height: 280,
        backgroundColor: 'yellow',

        borderWidth: 1,
        borderColor: 'grey',

    },
    slideSecond: {
        width: 140,
        height: 280,        
        backgroundColor: 'lightgreen',

        borderWidth: 1,
        borderColor: 'grey',

    },
    slideThird: {
        width: 140,
        height: 280,
        backgroundColor: 'pink',

        borderWidth: 1,
        borderColor: 'grey',
    },
    slideFourth: {
        width: 140,
        height: 280,
        backgroundColor: 'hsl(270, 100%, 75%)',

        borderWidth: 1,
        borderColor: 'grey',
    },



    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    }

});

export default ReactNativeSnapCarousel2222;