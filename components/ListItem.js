import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Header({ el }) {
    return (
        <TouchableHighlight>
            <Text style={styles.text}>
                {el.text}
            </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

});
