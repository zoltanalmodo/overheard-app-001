import React, { useState, useContext, useEffect }  from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

import DealCard from '../DealCard/DealCard'

import { Context as AuthContext } from '../../context/AuthContext'



const ReactNativeSnapCarousel = () => {

    const { state, setCategory } = useContext( AuthContext );
    const [ deals, setDeals ] = useState( [] );

    const deviceDisplayWidth = Dimensions.get('window').width;

    async function fetchMyAPI() {
        // var is used to shadow the global variable, DO NOT change it to const or let
        var deals = await axios.get('https://overheard.co.uk/card/all-ajax');
        setDeals(deals.data);
        setCategory('Lifestyle');
    };

        useEffect(() => {
            fetchMyAPI();
        }, []);


    const currentDeals = deals.filter(deal => deal.category.includes(state.category));


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

    

    const DATA = [

        {
            content: <Text style={styles.categoryText}>{state.category}</Text>,
            key: 'deals-title'
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[chunkSlice(currentDeals, 6).length - chunkSlice(currentDeals, 6).length]}
                    renderItem={this._renderCarouselRow}
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
                
            key: 0,   
        },
        {   
            content:

                <Carousel
                    data={chunkSlice(currentDeals, 6)[1]}
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
                    renderItem={this._renderCarouselRow}
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
    
    ];


    _renderCarouselRow = ({item, index}) => {
        return (

            <View style={styles.slideCard}>

                <DealCard 
                    _id={item._id}
                    key={item.order}
                    name={item.name}
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
                />

            </View>

        );
    };


    
    function Item({ content }) {
        return (
          <View>{ content }</View>
        );
      }



    return (

        <View style={styles.container}>
                                    
                <FlatList
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

        // marginTop: 33,
        // remove width and height to override fixed static size
        width: null,
        height: null,

        flexDirection: 'column',
        justifyContent: 'flex-start',

    },

    categoryText: {
        marginTop: 5,
        marginBottom: 2,
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
    },

});

export default ReactNativeSnapCarousel;