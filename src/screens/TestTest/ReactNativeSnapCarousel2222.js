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



// String.prototype.capitalize = function() {
//     return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
// };



const ReactNativeSnapCarousel2222 = () => {


    const { state, setCategory } = useContext(AuthContext);
    const [deals, setDeals] = useState([]);

    const deviceDisplayWidth = Dimensions.get('window').width;

    const currentDeals = deals.filter(deal => deal.category.includes(state.category));

    const populateCarousel = () => {
        return currentDeals.slice(0, 6)
    
    };

    async function fetchMyAPI() {
        // var is used to shadow the global variable, DO NOT change it to const or let
        var deals = await axios.get('https://overheard.co.uk/card/all-ajax');
        setDeals(deals.data);
        setCategory('Alcohol');
    };

        useEffect(() => {
            fetchMyAPI();
        }, []);



        const spliceTest = () => {

            let arrayToSplice = currentDeals;
            let returnArray = [];
            
            while(arrayToSplice.length) {
                
                returnArray.push(arrayToSplice.splice(0, 6));
                
                return returnArray;

            }

        };

        const spliceForLoop = () => {

            let arrayToSplice = currentDeals;
            let returnChunk = [];
            
            // while(arrayToSplice.length) {
            //     returnArray.push(arrayToSplice.splice(0, 6));
            //     return returnArray;
            // 


        };

        



        function chunkArray(theArrayToSplice, chunk_size){
            var chunkingResults = [];
            
            while (theArrayToSplice.length) {
                chunkingResults.push(theArrayToSplice.splice(0, chunk_size));
            }
            
            return chunkingResults;
        }
        
        // Split in group of 6 items
        // var chunkingResults = chunkArray([1,2,3,4,5,6,7,8], 6);
        // Outputs : [ [1,2,3,4,5,6] ,[7,8] ]
        // console.log(chunkArray(currentDeals, 6));

        console.log(chunkArray(currentDeals, 6));



    // deals.forEach(deal => console.log(deal));

    
    
    // console.log(spliceTest());
    
    

    const DATA = [
        {   
            content:

                <Carousel
                    data={populateCarousel()}
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
        }
    ];



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
    //      =>  DATA.content = <Carousel
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
    //      => DATA.key = loop001.index + 1
    //
    //
    


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