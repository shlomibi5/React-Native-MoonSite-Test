import React, { Component } from 'react';
import { View } from 'react-native';
import Nav from './Router';
import SplashScreen from './components/Splash';
import Loading from './components/Loading';


class App extends Component {

  state = {
    loaded: false
  }

  constructor(){
    super();
    SplashScreen.load(load => this.setState({loaded: true}));
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{flex: 1}}>        
        {this.state.loaded ? <Nav /> : <Loading />}      
      </View>
    );
  }
}



export default App;
