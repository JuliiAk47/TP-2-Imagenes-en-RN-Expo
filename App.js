import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Card from './Card';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./logo.png')} style={{ width: 300, height: 150 }} />
      <Text style={{ fontSize: 20, marginVertical: 25, fontWeight: 'bold', fontFamily: 'Roboto'}}>Try some of our most popular flavors!</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
