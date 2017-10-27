import React, { Component } from 'react';
import { Easing, Animated, Text, TouchableHighlight,  TextInput, View, StyleSheet } from 'react-native';


class PopupThree extends Component {

  constructor () {
    super()        
    this.animatedValue = new Animated.Value(0);
    this.state = {
      startTop: -450,
      startBottom: 120
      
    }
  }


  _onPress = () => {  
    this.animateEnd();
    this.setState({
     startTop: 120,
     startBottom: 650
    })
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
            <TouchableHighlight onPress={() => {
          this._onPress()
        }}
        style={styles.buttonStyle}
        >
          <Text style={{color: 'white', fontSize: 24}}>Close PopUp</Text>
        </TouchableHighlight>
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
labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'flex-start',
    marginLeft: 20
    
},
  textStyle: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20
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
  },
  buttonStyle: {
    backgroundColor: 'red',
    width: 200,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    borderRadius: 10
  }
})

export { PopupThree };
