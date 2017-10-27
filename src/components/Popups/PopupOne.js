import React, { Component } from 'react';
import { Easing, Animated, Text, TouchableHighlight, View, StyleSheet } from 'react-native';


class PopupOne extends Component {

  constructor () {
    super()        
    this.animatedValue = new Animated.Value(0);
    this.state = {
      startTop: -450,
      startBottom: 120
    }
  }
  componentDidMount () {
    this.animateStart()
  }
  animateStart () {
    this.animatedValue.setValue(0)
    const createAnimation =  (value, duration, easing, delay = 0) => {
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
    Animated.parallel([
      createAnimation(this.animatedValue, 1000, Easing.ease, 100)        
    ]).start()
  }

  animateEnd () {
    this.animatedValue.setValue(0)
    const createAnimation =  (value, duration, easing, delay = 0) => {
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
    Animated.parallel([
      createAnimation(this.animatedValue, 1000, Easing.ease, 100)        
    ]).start()
  }

  componentWillMount() {
    setTimeout( () => {
       this.setTimePassed();
    },4000);
  }
  
  setTimePassed() {
     this.animateEnd();
     this.setState({
      startTop: 120,
      startBottom: 650
     })
  }
 
  render() {
    const introTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.startTop, this.state.startBottom]
    })

    return (
      <View style={styles.container}>
        <Animated.View style={{top: introTop, position: 'absolute'}}>
          <View style={styles.popupBox}>
            <Text style={styles.textStyle}>Hello I'm PopUp</Text>
            <Text>I will disappear in 3 seconds</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textStyle: {
    color: 'white',
    fontSize: 30
  },
  popupBox: {
    backgroundColor: '#819FF7',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  }
})

export { PopupOne };
