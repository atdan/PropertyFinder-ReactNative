'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import SearchPage from "./SearchPage";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchResults from './SearchResults';



const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});



export default App;
