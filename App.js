import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
  // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{ flex: 1  }}>
        <View style={{flex: 2, backgroundColor: 'powderblue', justifyContent: "center", alignItems: "center"}}>
          <Text>Hello, world!</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>

        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: "center", alignItems: "center"}}>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue', justifyContent: "center", alignItems: "center"}} >
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
      </View> 
    );
  }
} 