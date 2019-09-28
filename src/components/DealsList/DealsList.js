import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';


import DealCard from '../DealCard/DealCard'

class DealsList extends Component {

    state = { deals: [] }; 

    async componentDidMount() {
        const deals = await axios.get('https://overheard.co.uk/card/all-ajax');
        this.setState({
            deals: deals.data
        });
        
    };

    
    render() {
        
        // this.state.deals.forEach(deal => console.log(deal));
        
        
        return (
            
            <SafeAreaView style={styles.styleSafeAreaView}>
            <Text style={styles.dealsTitleText}>All deals</Text>
            <FlatList
                data={this.state.deals}
                // horizontal={false}
                numColumns= {2}
                columnWrapperStyle
                keyExtractor={item => item._id}
                renderItem={(deal) => {
                    // deal === { item: { name: 'Friend #1 }, index: 0 }
                    return (
                        <DealCard 
                            key={deal.item.order}
                            name={deal.item.name}
                            img={deal.item.img}
                            lineOne={deal.item.lineOne}
                            lineTwo={deal.item.lineTwo}
                            lineThree={deal.item.lineThree}
                            mainOffer={deal.item.mainOffer}
                            offerSmall={deal.item.offerSmall}
                        />
                    )
                }}
            />
            </SafeAreaView>

        );
    }

}

const styles = StyleSheet.create({

    styleSafeAreaView: {
        // backgroundColor: 'pink',
        marginTop: 0,
        marginHorizontal: 32,
    },

    dealsTitleText: {
        // backgroundColor: 'cyan',
        // fontFamily: 'roboto-bold',
        fontSize: 16,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 4,
    },
});

export default DealsList;