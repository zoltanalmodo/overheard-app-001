import React from 'react';
import { Text, StyleSheet } from 'react-native';


const DealsListCategoryTitle = (props) => {
    return (
        <Text style={styles.dealsListCategoryTitle}>{props.title}</Text>
    )
};

const styles = StyleSheet.create({

    dealsListCategoryTitle: {
        // backgroundColor: 'cyan',
        // fontFamily: 'roboto-bold',
        fontSize: 16,
        fontWeight: '800',
        marginTop: 4,
        marginBottom: 4,
    },

});

export default DealsListCategoryTitle;