import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Список дел</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
