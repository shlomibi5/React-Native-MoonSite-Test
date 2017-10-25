import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Header, ButtonOne, ButtonTwo, ButtonThree, ButtonFour } from './components/common';


class MainApp extends Component {

  render() {
    return (
      <View>   
        <ButtonOne name="Popup Modal"/>
        <ButtonTwo name="Input Popup Modal" />
        <ButtonThree name="Button Popup Modal" />
        <ButtonFour name="Circle Input Modal" />
      </View>
    );
  }
}

export default MainApp;
//  <Header textHeader="Menu Screen - 4 Buttons" />