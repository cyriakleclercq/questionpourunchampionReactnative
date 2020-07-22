import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import questionnaire from '../services/questionnaires';

const Game = (props) => {

    const [i, setI] = useState(1)
    const [questions, setQestions] = useState(questionnaire)
    const [question, setQuestion] = useState(questions[0])

    const result = (value) => {
        if (i < questions.length) {
            if (question.reponse == value) {
                props.score()

            } else {
                console.log('pas ok')
            }
            setI(i + 1)
            setQuestion(questions[i])
        }
    }

    return (
        <View>
            <View style={styles.question}>
                <Text style={styles.h1}>{question.question} </Text>
            </View>
            <View style={styles.button}>

                <Button style={styles.myButton} title="vrai" onPress={() => result('vrai')} />
                <Button style={styles.myButton} title="faux" onPress={() => result('faux')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    question: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        height: 600
    },
    myButton: {
        width: 100
    },
    h1: {
        fontSize: 25

    }
});

export default Game;