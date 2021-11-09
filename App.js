import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Дело 1', key: '1' },
    { text: 'Дело 2', key: '2' },
    { text: 'Дело 3', key: '3' },
    { text: 'Дело 4', key: '4' },
  ])

  /* 
  Создание новых тасков.
  РАЗВИТИЕ: изменить функцию генерации ключа
  сейчас: геренация ключа через рандомизацию
  будет: генарацию ключа через инкрементацию индекса ключа (с учетом зацикливания)
  */
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  /*
  Удаление элементов с фильтром.
  Возвращение списка тасков с исключенными тасками, у которых совпали ключи.
  */
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
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
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({


});
