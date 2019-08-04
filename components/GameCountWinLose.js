import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function GameCountWinLose(props) {
    return(
        <View style={styles.columnGameWinLose}> 
            <Text>{props.count}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({  
    columnGameWinLose: {
        flexDirection: 'column'
    }
})

export default GameCountWinLose;