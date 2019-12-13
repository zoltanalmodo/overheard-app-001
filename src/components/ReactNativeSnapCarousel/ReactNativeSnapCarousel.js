import React, { useState, useContext, useEffect }  from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';


import Carousel from 'react-native-snap-carousel';

import DealCard from '../DealCard/DealCard'

import { Context as AuthContext } from '../../context/AuthContext'



const ReactNativeSnapCarousel = () => {

    const { state, setCategory } = useContext( AuthContext );

    const deviceDisplayWidth = Dimensions.get('window').width;

    const currentDeals = state.dealsArray.filter(deal => deal.category.includes(state.category));


    
    // ===================== chunking SLICE loop ===================== start

        function chunkSlice(arrayToSlice, size) {
            const chunked_arr = [];
            var index = 0;
            while (index < arrayToSlice.length) {
            chunked_arr.push(arrayToSlice.slice(index, size + index));
            index += size;
            }
            return chunked_arr;
        }
    
    // ===================== chunking SLICE loop ======================= end



    const _renderCarouselRow = ({item, index}) => {
        return (

            <View style={styles.slideCard}>

                <DealCard
                    index = {index}
                    _id = {item._id}
                    key = {item._id}
                    name = {item.name}
                    img={item.img}
                    lineOne={item.lineOne}
                    lineTwo={item.lineTwo}
                    lineThree={item.lineThree}
                    mainOffer={item.mainOffer}
                    offerSmall={item.offerSmall}
                    buttonText={item.buttonText}
                    categories={item.category}
                    tags={item.tags}
                    location={item.location}
                    availability={item.availability}
                    link={item.link}
                    offline={!item.online}
                    imageLabel={item.imageLabel}
                />

            </View>

        );
    };



    const DATA = [

        {
            content:
                <View style={styles.centerContainer}>
                    <View>
                        <Text style={styles.categoryText}>{state.category}</Text>
                    </View>
                </View>,
            key: 'deals-title'
        },
        {   
            content:
                
                <View style={styles.centerContainer}>
                    <Carousel
                        data={chunkSlice(currentDeals, 6)[0]}
                        renderItem={_renderCarouselRow}
                        sliderWidth={deviceDisplayWidth}
                        sliderHeight={260}
                        itemWidth={140}
                        itemHeight={260}
                        loop={true}

                        contentContainerCustomStyle={{
                            height: 264,
                            marginTop: 5,
                            flexGrow: 0,
                        }}
                    />
                </View>,

            key: 0,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[1]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 1,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[2]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 2,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[3]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 3,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[4]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 4,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[5]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 5,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[6]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 6,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[7]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 7,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[8]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 8,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[9]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 9,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[10]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 10,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[11]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 11,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[12]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 12,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[13]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 13,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[14]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 14,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[15]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 15,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[16]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 16,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[17]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 17,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[18]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 18,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[19]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 19,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[20]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 20,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[21]}
                    renderItem={_renderCarouselRow}
                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}
                    itemWidth={140}
                    itemHeight={260}
                    loop={true}

                    contentContainerCustomStyle={{
                        height: 264,
                        marginTop: 5,
                        flexGrow: 0,
                    }}
                />,
                
            key: 21,   
        },
    
    ];

    

    function Item({ content }) {
        return (
          <View>{ content }</View>
        );
      }



    return (

        <View style={styles.container}>
                                     
                <FlatList
                    initialNumToRender={2}
                    data={ DATA }
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

    centerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },

    categoryText: {

        width: 160,
        height: 20,

        marginTop: 5,
        marginBottom: 2,
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
    },

    slideCard: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    
    },

});

export default ReactNativeSnapCarousel;