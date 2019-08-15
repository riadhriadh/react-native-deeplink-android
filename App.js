//import liraries
import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Linking,
  YellowBox,
} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
// create a component
class App extends Component {
  componentDidMount() {
    // B
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    // C
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL = event => {
    // D
    console.log('event');
  };
  navigate = url => {
    // E

    console.log('hello deep link');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
