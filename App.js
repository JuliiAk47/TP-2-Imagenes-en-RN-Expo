import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import React from 'react';
import Card from './Card';
import friends from "./friends.jpg"

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./logo.png')} style={{ width: 300, height: 150 }} />
      <Text style={{ fontSize: 20, marginVertical: 25, fontWeight: 'bold', fontFamily: 'Arial'}}>Try some of our most popular flavors!</Text>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});