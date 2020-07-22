import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accueil from './components/Accueil';
import Options from './components/options';
import Game from './components/Game';

export default function App() {

  const [val, setVal] = useState(1)
  const [lvl, setLvl] = useState('facile')
  const [hp, setHp] = useState(3)
  const [score, setScore] = useState(0)

  const changePage = (value) => {
    setVal(value)
  }

  const changeLvl = (value) => {
    setLvl(value)
  }

  const scoring = () => {
    setScore(score + 1)
  }

  if (val == 1)
    return (
      <View style={styles.container}>
        <Accueil changePage={changePage} />
        <Text> niveau de difficulté : {lvl}</Text>
      </View>
    )

  if (val == 2)
    return (
      <View style={styles.container}>
        <Options changePage={changePage} change={changeLvl} lvl={lvl} />
      </View>
    )

  if (val == 0)
    return (
      <View>
        <View style={styles.headerScore}>
          <Text> Score : {score}</Text>
          <Text> Nombre de vie : {hp}</Text>
        </View>
        <View style={styles.container}>
          <Game lvl={lvl} score={scoring} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center"
  },
  headerScore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
