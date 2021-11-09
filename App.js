import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Дело 1', index: 1 },
    { text: 'Дело 2', index: 2 },
    { text: 'Дело 3', index: 3 },
    { text: 'Дело 4', index: 4 },
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, index: 5 },
        ...list
      ]
    })
  }

  /* 
  Header - заголовок.
  Form - форма для ввода новых дел.
  View>FlatList - отображение To-do списка.
  */
  return (
    <View>
      <Header />

      <Form addHandler={addHandler} />

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
