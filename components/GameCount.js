import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function GameCount(props) {
    return(
        <View>
            <Text>Count game: {props.count}</Text>
        </View>
    );
}

export default GameCount;