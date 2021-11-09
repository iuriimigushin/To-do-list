import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
// Компонент удаления элементов To-do списка.

export default function ListItem({ el }) {
    // Функция сохранения введенной задачи
    const [text, setValue] = useState('');

    // Функция-обработчик введенного пользователем текста
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу' />
        </View>
    );
}

// Стили для рендера списка дел.
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        padding: 10
    }
});
