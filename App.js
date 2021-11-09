import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Дело 1', index: 1 },
    { text: 'Дело 2', index: 2 },
    { text: 'Дело 3', index: 3 },
    { text: 'Дело 4', index: 4 },
  ])

  /* 
  Header - заголовок
  View>FlatList - отображение To-do списка
  */
  return (
    <View>
      <Header />

      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} />
        )} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});
