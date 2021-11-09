import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Дело 1', index: 1 },
    { text: 'Дело 2', index: 1 },
    { text: 'Дело 3', index: 1 },
    { text: 'Дело 4', index: 1 },
  ])

  return (
    <View>
      <Header />
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});
