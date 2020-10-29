import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return(
      <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity = { .4 }
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 5,
            marginBottom: 10,
            width: '50%',
            backgroundColor: '#47624F',
          }}
          onPress={() => { navigation.navigate('FarmersMap'); }}
        >
          <Text style={styles.TextStyle}> carte des producteurs.trices </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity = { .4 }
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 5,
            marginBottom: 10,
            width: '50%',
            backgroundColor: '#52AD9C',
          }}
          onPress={() => { navigation.navigate('FarmersList'); }}
        >
          <Text style={styles.TextStyle}> liste des producteurs.trices </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity = { .4 }
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 5,
            marginBottom: 10,
            width: '50%',
            backgroundColor: '#00BCD4',
          }}
          onPress={() => { navigation.navigate('Search'); }}
        >
          <Text style={styles.TextStyle}> rechercher </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity = { .4 }
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 5,
            marginBottom: 10,
            width: '50%',
            backgroundColor: '#6CC551',
          }}
          onPress={() => { navigation.navigate('ClientRegistration'); }}
        >
          <Text style={styles.TextStyle}> contribuer !</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  TouchableOpacityStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '50%',
    backgroundColor: '#00BCD4',
  },
  TextStyle: {
    color:'#fff',
    textAlign:'center',
    textTransform: 'uppercase'
  }
});
