import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// Компонент вывода элементов To-do списка.

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableOpacity>
    );
}

// Стили для рендера списка дел.
const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    }

});
