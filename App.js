import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import BookList from './components/BookList'
import BookDes from './components/BookDes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="BookList" component={BookList} title="List of Book" initial={true}/>
            <Scene key="BookDes" component={BookDes} title="Detail"/>
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ff0',
  }
});