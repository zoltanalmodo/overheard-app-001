import React, { useState, useContext, useEffect }  from 'react';
import {
    View, Text, StyleSheet, ImageBackground,
    TouchableOpacity, Dimensions, FlatList, SafeAreaView
} from 'react-native';


// ============================== test
import Carousel from 'react-native-snap-carousel';

import axios from 'axios';

import backimage from '../../img/newbg.png'

import DealCard from '../../components/DealCard/DealCard'
import { Context as AuthContext } from '../../context/AuthContext'



const ReactNativeSnapCarousel2222 = () => {


    const { state, setCategory } = useContext(AuthContext);
    const [deals, setDeals] = useState([]);

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


    // ===================== chunking =====================

        // =========== chunking works =========== start
            const populateCarousel = () => {
                return currentDeals.slice(0, 6)
            
            };

            // console.log(populateCarousel());

        // =========== chunking works =========== end



        // =========== chunking WHILE loop =========== start
            
        function chunkWhile(theArrayToSplice, chunk_size){
            var chunkingResults = [];
            
            while (theArrayToSplice.length) {
                chunkingResults.push(theArrayToSplice.splice(0, chunk_size));
            }
            
            return chunkingResults;
        }
        
        // Split in group of 6 items
        // var chunkingResults = chunkArray([1,2,3,4,5,6,7,8], 6);
        // Outputs : [ [1,2,3,4,5,6] ,[7,8] ]


        // console.log(chunkWhile(currentDeals, 6));

        
        // =========== chunking WHILE loop =========== end


        // =========== chunking USING SLICE loop =========== start

        function chunkSlice(arrayToSlice, size) {
            const chunked_arr = [];
            var index = 0;
            while (index < arrayToSlice.length) {
              chunked_arr.push(arrayToSlice.slice(index, size + index));
              index += size;
            }
            return chunked_arr;
        }


        // console.log(chunkSlice(currentDeals, 6)[0]);

        // =========== chunking USING SLICE loop =========== start

        



        // =========== chunking with LOOP =========== start

        // need to return => 
        // chunkArrayLoopDATA = [{content: <Carousel props />, key: i + increment with each loop }]


            const chunkArrayLoop = () => {

                let chunkedDATA = [
                    {content: {title: 'index-000'}, key: 0,}, 
                    {content: {title: 'index-1'}, key: 1,}
                ];
                
                return chunkedDATA
            
            };
            
            // console.log(chunkArrayLoop());

        // =========== chunking with LOOP =========== end


        
        
        

    

        //  function returning an object =
        //      content = Carousel = populated with properties
        //      key = (generated from index)
        //
        //
        //  =========== example ===========
        //
        //  var myCar = new Object();
        //  myCar.make = 'Ford';
        //  myCar.model = 'Mustang';
        //  myCar.year = 1969;
        //
        //  =========== TEST ===========
        //
        //
        //  LOOP ( loop001 (items = 12, index = 0 ) ) creates =>
        //
        //      =>  let populatedDATA = new Object();
        //      =>  populatedDATA.content = <Carousel
        //              
        //              data = { loop002 => arrayToSplice.splice(0,4) }
        //              renderItem = {this._renderCarouselRow}
        //              sliderWidth={deviceDisplayWidth}
        //              sliderHeight={260}
        //              itemWidth={140}
        //              itemHeight={260}
        //              loop={true}
        //              
        //              contentContainerCustomStyle={{
        //              height: 264,
        //              marginTop: 5,
        //              flexGrow: 0,
        //              }}
        //
        //          />
        //  
        //      => populatedDATA.key = loop001.index + 1
        //
        //
   

        
    

    const DATA = [
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
                    data={chunkSlice(currentDeals, 6)[chunkSlice(currentDeals, 6).length - chunkSlice(currentDeals, 6).length+1 ]}
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

        <ImageBackground source={backimage} style={styles.container}>
            
            <View style={{backgroundColor: 'yellow',}}>
                <Text style={styles.centeredScreenText}>React Native Snap Carousel2222</Text>
            </View>
                        
                <FlatList
                    data={ DATA }
                    renderItem={({ item }) => <Item content={item.content} />}
                    keyExtractor={item => item.key}
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
        // remove width and height to override fixed static size
        width: null,
        height: null,

        // flex: 1,

        flexDirection: 'column',
        justifyContent: 'flex-start',

        // backgroundColor: 'magenta',

    },

    

    centeredScreenText: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 14,
        fontWeight: '400',
        color: 'purple',
    },



});

export default ReactNativeSnapCarousel2222;