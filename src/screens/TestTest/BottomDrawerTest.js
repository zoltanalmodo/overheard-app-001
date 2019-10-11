import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';

// this example assumes you're using a header and a tab bar


export default class BottomDrawerTest extends React.Component {
  renderContent = () => {

    return (
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <Button title="<<< baaack" />
        </View>
      </View>
    )
  }

  render() {
    return (
      
      <BottomDrawer
        containerHeight={75}
        downDisplay={-1}
        shadow={false}
        startUp={false}
        backgroundColor='darkblue'
      >
        {this.renderContent()}

      
      </BottomDrawer>
    )
  }
}

const styles = StyleSheet.create({

  drawerPosition: {

    flexDirection: 'row',
    justifyContent: 'center',

  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

