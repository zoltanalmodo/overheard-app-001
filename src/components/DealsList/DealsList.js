import React, { Component } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';


import DealsListCategoryTitle from '../DealsListCategoryTitle/DealsListCategoryTitle';
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

            <DealsListCategoryTitle title={`All deals`}/>

            <FlatList
                data={this.state.deals}
                // horizontal={false}
                centerContent = {true}
                numColumns = {2}
                columnWrapperStyle
                keyExtractor = {item => item._id}
                renderItem = {(deal) => {
                    
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
        marginHorizontal: 32,
    },

});

export default DealsList;