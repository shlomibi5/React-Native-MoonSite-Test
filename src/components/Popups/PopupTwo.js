import React, { Component } from 'react';
import { Easing, Animated, Text, TouchableHighlight, TextInput, View, StyleSheet } from 'react-native';


class PopupTwo extends Component {

  state = {
    animatedValue: new Animated.Value(0),
    seconds: 2,
    startTop: -350,
    startBottom: 120,
    opacity: [1, 0, 1]

  }

  _onPress = () => {
    this.animateStart()
    this.start()
  }

  start(){setTimeout(() => {
    this.setTimePassed();
  }, this.state.seconds * 1000);
  }

  setTimePassed() {
    this.animateEnd();
    this.setState({
      startTop: 120,
      startBottom: 650,
      opacity: [1, 0, 1]
    })
    this.resetState();
  }

  resetState() {
    setTimeout(() => {
      this.setState({
        startTop: -350,
        startBottom: 120,
      })
    }, this.state.seconds * 1000);
  }


  animateStart() {
    this.state.animatedValue.setValue(0)
    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.sequence([
      createAnimation(this.state.animatedValue, 1000, Easing.ease, 100)
    ]).start()
  }

  animateEnd() {
    this.state.animatedValue.setValue(0)
    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.sequence([
      createAnimation(this.state.animatedValue, 1000, Easing.ease, 100)
    ]).start()
  }


  render() {
    const introTop = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.startTop, this.state.startBottom]
    })

    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 0.1, 1],
      outputRange: this.state.opacity
    })

    return (
      <View style={styles.container}>

        <Text style={styles.labelStyle}>
          Enter Seconds:
        </Text>
        <TextInput
          placeholder="Default is 2 Seconds"
          style={styles.textInputStyle}
          value={this.state.seconds}
          onChangeText={(seconds) => this.setState({ seconds })}
        />
        <TouchableHighlight onPress={() => {
          this._onPress()
        }}
          style={styles.buttonStyle}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>Submit</Text>
        </TouchableHighlight>

        <Animated.View style={{ top: introTop, opacity, position: 'absolute' }}>
          <View style={styles.popupBox}>
            <Text style={styles.textStyle}>Hello I'm PopUp</Text>
            <Text>I will disappear in <Text style={{ color: 'white', fontSize: 20 }}>{this.state.seconds}</Text> seconds</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textInputStyle: {
    marginTop: 10,
    height: 50,
    width: 300,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderWidth: 1,
    borderColor: '#ccc'

  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'flex-start',
    marginLeft: 20

  },
  textStyle: {
    color: 'white',
    fontSize: 30
  },
  popupBox: {
    backgroundColor: '#819FF7',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  },
  buttonStyle: {
    backgroundColor: '#FA5858',
    width: 200,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    borderRadius: 10
  }
})

export { PopupTwo };
