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

    const deviceDisplayWidth = Dimensions.get('window').width;


    const { state, setCategory } = useContext(AuthContext);
    const [deals, setDeals] = useState([]);


    async function fetchMyAPI() {
        // var is used to shadow the global variable, DO NOT change it to const or let
        var deals = await axios.get('https://overheard.co.uk/card/all-ajax');
        setDeals(deals.data);
        setCategory('Deals Menu');
    }
  
        useEffect(() => {
            fetchMyAPI();
        }, []);


    // deals.forEach(deal => console.log(deal));

    // console.log(deals);

    const currentDeals = deals.filter(deal => deal.category.includes(state.category))


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

    const DATA = [
        
        {   
            content:
                <Carousel

                    data={currentDeals.slice(0, 5)}

                    renderItem={this._renderCarouselRow}

                    sliderWidth={deviceDisplayWidth}
                    sliderHeight={260}

                    itemWidth={140}
                    itemHeight={260}
                    layout={'default'}
                    firstItem={2}

                    enableSnap={true}
                    loop={true}
                    contentContainerCustomStyle={
                        {
                            backgroundColor: 'pink',
                            height: 264,

                            marginTop: 4,
                            marginBottom: 0,

                            flexGrow: 0,

                        }
                    }

                />,
                
            title: 'carousel-001',
            id: '123-001'

        },


        
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
            
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item content={item.content} />}
                    keyExtractor={item => item.id}
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

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    }

});

export default ReactNativeSnapCarousel2222;