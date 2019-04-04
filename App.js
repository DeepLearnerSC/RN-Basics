import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

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
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Hello, world!</Text>
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      //   <Greeting name='Rexxar' />
      //   <Greeting name='Jaina' />
      //   <Greeting name='Valeera' />
      //   <Blink text='I love to blink' />
      //   <Blink text='Yes blinking is so great' />
      //   <Blink text='Why did they ever take this out of HTML' />
      //   <Blink text='Look at me look at me look at me' />
      //   <Text style={styles.red}>just red</Text>
      //   <Text style={styles.bigBlue}>just bigBlue</Text>
      //   <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      //   <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View> 
    );
  }
}