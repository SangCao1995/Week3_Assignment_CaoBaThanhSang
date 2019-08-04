import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function GameCountWin(props) {
    return(
        <View> 
            <Text>{props.count}</Text>
            
        </View>
    );
}


export default GameCountWin;