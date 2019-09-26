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
        
        this.state.deals.forEach(deal => alert(deal));
        
        
        return (
            
            <SafeAreaView style={styles.styleSafeAreaView}>
            <FlatList
                data={this.state.deals}
                horizontal={false}
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
        justifyContent: 'space-between',
        marginTop: 55,
    },

    container: {
        marginTop: 10,
        marginLeft: 8,
        marginRight: 8
    },
    text: {
        fontSize: 20,
        color: 'red'
      }
});

export default DealsList;