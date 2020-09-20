import React, {Component} from 'react';
import MainContainer from './src/navigations/index';
import {AppRegistry} from 'react-native'
import {createStore} from 'redux';
import {Provider} from 'react-redux';


 export default class App extends Component {
  render() {
    return <MainContainer />;
  }
}
