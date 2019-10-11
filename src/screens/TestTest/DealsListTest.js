import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';


import DealCard from '../../components/DealCard/DealCard'

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
            
            <FlatList
                style={styles.flatList}
                data={this.state.deals}
                // horizontal={false}
                centerContent = {true}
                numColumns = {2}

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
                            buttonText={deal.item.buttonText}
                        />
                    )
                }}
            />

        );
    }

}

const styles = StyleSheet.create({

    flatList: {
        // backgroundColor: 'pink',
        marginHorizontal: 32,
        zIndex: 0,
        flex: 1,
        flexDirection: 'row',
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
});

export default DealsList;