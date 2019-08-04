import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {GameStatus, ButtonGroup, PlayerCard, GameCount, GameCountWinLose, GameCountWin} from './components/index'
import {CHOICES} from './constant';
import {randomComputerChoice, getRoundOutcome, getCount, getCountWinLose} from './utility';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      countText: 0,
      result: 'Choose your weapon!'
    }
  }
  
  onPressButton = (playerChoice) => {
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice);
    computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name, computerChoice.name);
    count = getCount();
    this.setState({
      playerChoice: foundChoice,
      computerChoice: computerChoice,
      countText: count,
      result: result,   
    })
    
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWrapper}>
          <GameStatus name={this.state.result}></GameStatus>
          <View style={styles.gameCountWrapper}>
            <GameCount count={this.state.countText}></GameCount>
          </View>
        </View>
        <View style={styles.playerCardWrapper}>
          <View>
            
          </View>
          <PlayerCard playerName="You" choice={this.state.playerChoice}></PlayerCard>
          <Text style={styles.textVS}>vs</Text>
          <PlayerCard playerName="Computer" choice={this.state.computerChoice}></PlayerCard>
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup onPressButton={this.onPressButton}>
  
          </ButtonGroup>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameStatusWrapper: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameCountWrapper: {
    flexDirection: 'row'
  },
  gameCountWinLoseWrapper: {
    flexDirection: 'column'
  },
  playerCardWrapper: {
    flex: 0.5,
    flexDirection: 'row'
  },
  buttonGroupWrapper: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textVS: {
    marginTop: 150
  }
});
