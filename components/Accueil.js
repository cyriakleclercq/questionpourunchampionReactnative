import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Accueil = (props) => {

    const play = () => {
        props.changePage(0)
    }

    const options = () => {
        props.changePage(2)
    }

    return (
        <View style={styles.accueil}>
            <Button title="jouer" onPress={play} />
            <Button title="options" onPress={options} />
        </View>
    );
}

const styles = StyleSheet.create({
    accueil: {
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 200

    }
});

export default Accueil;