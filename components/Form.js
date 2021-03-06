import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
// Компонент удаления элементов To-do списка.

export default function Form({ addHandler }) {
    // Функция сохранения введенной задачи
    const [text, setValue] = useState('');

    // Функция-обработчик введенного пользователем текста
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу' />
            <Button color='#18A558' onPress={() => addHandler(text)} title='Добавить задачу' />
        </View>
    );
}

// Стили для рендера списка дел.
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: '5%',
        marginHorizontal: '20%',
        width: '60%'
    }
});
