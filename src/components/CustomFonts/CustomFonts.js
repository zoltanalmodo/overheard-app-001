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
            'roboto-regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }
    
    render() {
        return (
        <View style={styles.container}>
            {
                this.state.fontLoaded ? (
                <View>
                    <Text style={styles.customFontsRobotoBold}>
                        Roboto Bold.ttf
                    </Text>
                    <Text style={styles.customFontsRobotoRegular}>
                        Roboto Regular.ttf
                    </Text>
                </View>
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
    customFontsRobotoBold: {
        fontFamily: 'roboto-bold',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    },
    customFontsRobotoRegular: {
        fontFamily: 'roboto-regular',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 36,
        color: 'salmon',
    }
});