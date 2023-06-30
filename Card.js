import React from 'react';
import { View, Image, Text } from 'react-native';

const Card = () => {
  return (
    <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 2 }}>
      <Image source={require('./cafe.jpg')} style={{ width: 200, height: 200, marginBottom: 10 }} />
      <Text style={{ fontSize: 18,textAlign:'center', fontWeight:'bold' }}>Mocha</Text>
    </View>
  );
};

export default Card;
