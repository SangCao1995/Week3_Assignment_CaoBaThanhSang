import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

function PlayerCard(props) {
    return (
        <View style={styles.column}>
            <Text style={styles.playerName}>
                {props.playerName}
            </Text>
            <Image source={{
                uri: props.choice.uri
            }}
                resizeMode="contain"
                style={styles.choiceImage}>


            </Image>
            <Text>
                {props.choice.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playerName: {
        fontWeight: 'bold',
        textDecorationLine: "underline",
        fontSize: 15
    },
    choiceImage: {
        width: 150,
        height: 150
    }
});

export default PlayerCard;