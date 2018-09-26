/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler,
  BackAndroid,
  WebView,
} from 'react-native';
let {height, width} = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  webView = null;

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={(webView) => { this.webView = webView; }}
          source={{uri: 'https://sumsel.pileg.id/public/'}}
          style = {{width:width}}
        />
      </View>
    );
  }
  onAndroidBackPress = () => {
    if (this.webView) {
      this.webView.goBack();
      return true;
    }
    return false;
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.webView.goBack();
      return true;
    });
  };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
