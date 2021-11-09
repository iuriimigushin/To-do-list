import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Дело 1', index: 1 },
    { text: 'Дело 2', index: 2 },
    { text: 'Дело 3', index: 3 },
    { text: 'Дело 4', index: 4 },
  ])

  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <Text> {item.text}</Text>
        )} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});
