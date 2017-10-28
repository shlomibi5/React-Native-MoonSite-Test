import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


class ButtonFour extends Component {
  

  render() {
    return (
      <View style={{marginTop: 22}}>         
        <TouchableHighlight onPress={() => {
          Actions.popupfour()
        }}
        style={styles.buttonStyle}
        >
          <Text style={styles.textButton}>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  textstyle: {
    fontSize: 24,
  },

  textButton: {
    color: 'white',
    fontSize: 30
  },

  buttonStyle: {
    backgroundColor: '#ea571e',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    borderRadius: 10
  }

})

export { ButtonFour };
