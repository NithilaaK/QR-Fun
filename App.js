import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScannerScreen from './screens/ScannerScreen';
import CreateScreen from './screens/CreateScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  'Scan It' : {screen: ScannerScreen},
  'Create!' : {screen: CreateScreen}
})

const AppContainer = createAppContainer(TabNavigator)