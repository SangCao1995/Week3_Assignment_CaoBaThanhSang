import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {CHOICES} from '../constant'

function ButtonGroup(props) {
    return CHOICES.map(item => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => props.onPressButton(item.name)}>
                <Text style={styles.textInButton}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    })
}

const styles = StyleSheet.create({
    button: {
        width: 170,
        height: 40,
        backgroundColor: 'brown',
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInButton: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 20
    }
});

export default ButtonGroup;