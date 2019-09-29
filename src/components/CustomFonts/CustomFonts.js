import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as Font from 'expo-font';

export default class CustomFonts extends React.Component {

    state = {
        fontLoaded: false,
      };

    async componentDidMount() {
        await Font.loadAsync({
        'roboto-bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }
    
    render() {
        return (
        <View style={styles.container}>
            {
                this.state.fontLoaded ? (
                <Text style={styles.customFontsText}>
                    Hello, world!
                </Text>
                ) : null
            }
        </View>
        );
    }
    
}

CustomFonts.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
      },
      customFontsText: {
        fontFamily: 'roboto-bold',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});