import React, { Component } from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import TabScreen from './src/screens/TabScreen'
import { AppLoading } from "expo";
import * as Font from 'expo-font'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount () {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      FontAwesome : require("native-base/Fonts/FontAwesome.ttf")

    });
    this.setState({ loading: false });
  }
  
  render(){
    if (this.state.loading) {
      return (
          <AppLoading/>
      );
    }
    return(
      <TabScreen/>
    )
  }
}
const styles= StyleSheet.create({
  container:{
    margin: 20,

  }
  
})