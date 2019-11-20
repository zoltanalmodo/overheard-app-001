import React, { useState, useContext, useEffect }  from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import axios from 'axios';


import DealCard from '../DealCard/DealCard'

import { Context as AuthContext } from '../../context/AuthContext';



const DealsList = ({navigation} ) => {

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
    
    

    // this.state.deals.forEach(deal => console.log(deal));
    
    const currentDeals = deals.filter(deal => deal.category.includes(state.category))
        
        return (
            
            <SafeAreaView style={styles.styleSafeAreaView}>

            <View >


                <Text style={styles.categoryText}>{state.category}</Text>

                <FlatList
                    style={styles.flatListPosition}
                    showsVerticalScrollIndicator= {false}
                    data={currentDeals}
                    centerContent = {false}
                    numColumns = {2}
                    columnWrapperStyle
                    keyExtractor = {item => item._id}
                    renderItem = {(deal) => {

                        return (

                            <View>
                                
                                <DealCard 
                                    _id={deal.item._id}
                                    key={deal.item.order}
                                    name={deal.item.name}
                                    img={deal.item.img}
                                    lineOne={deal.item.lineOne}
                                    lineTwo={deal.item.lineTwo}
                                    lineThree={deal.item.lineThree}
                                    mainOffer={deal.item.mainOffer}
                                    offerSmall={deal.item.offerSmall}
                                    buttonText={deal.item.buttonText}
                                    categories={deal.item.category}
                                    tags={deal.item.tags}
                                    location={deal.item.location}
                                    availability={deal.item.availability}
                                    link={deal.item.link}

                                    offline={!deal.item.online}
                                />

                            </View>
                        )

                    }}
                />

            </View >

            </SafeAreaView>

        );
    

};

const styles = StyleSheet.create({

    styleSafeAreaView: {
        // backgroundColor: 'pink',
        marginTop: 0,
        flex: 1,
        width: null,
        height: null,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    categoryTextPosition: {
    },

    categoryText: {
        marginTop: 5,
        marginBottom: 3,
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        // borderWidth: 2,
        // borderColor: 'red',
    },

    flatListPosition: {
        // borderWidth: 2,
        // borderColor: 'orange',
    },

});

export default DealsList;