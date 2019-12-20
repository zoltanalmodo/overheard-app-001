import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CarouselData from '../CarouselData/CarouselData'


const ReactNativeSnapCarousel = () => {
    
    function Item({ content }) {
        return (
          <View>{ content }</View>
        );
    }

    return (

        <View style={styles.container}>
                                     
                <FlatList
                    initialNumToRender={2}
                    data={ CarouselData() }
                    renderItem={({ item }) => <Item content={item.content} />}
                    keyExtractor={item => item.key}
                />

        </View>

    )
};

ReactNativeSnapCarousel.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({

    container: {
        width: null,
        height: null,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

});

export default ReactNativeSnapCarousel;