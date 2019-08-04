import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function GameStatus(props) {
    if(props.name === "Victory!") {
        return(
            <View style={styles.column}>
                <Text style={styles.headerTextWin}>{props.name}</Text>
            </View>
        );
    }
    else if(props.name === "Defeat!"){
        return(
            <View style={styles.column}>
                <Text style={styles.headerTextLose}>{props.name}</Text>
            </View>
        );
    }
    else {
        return(
            <View style={styles.column}>
                <Text style={styles.headerText}>{props.name}</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        color: 'black'
    },
    headerTextWin: {
        fontSize: 30,
        color: 'green'
    },
    headerTextLose: {
        fontSize: 30,
        color: 'red'
    },
    column: {
        flexDirection: 'column',
        flex: 1
    }
})
export default GameStatus;