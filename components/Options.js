import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';

const Options = (props) => {

    const [selectedValue, setSelectedValue] = useState(props.lvl);

    const levelValidator = () => {
        props.changePage(1)
        props.change(selectedValue)
    }

    return (

        <View style={styles.options}>
            <Text> Difficulté : </Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="facile" value="facile" />
                <Picker.Item label="normal" value="normal" />
                <Picker.Item label="difficile" value="difficile" />
            </Picker>

            <Button title="valider" onPress={levelValidator} />
        </View>
    );
}

const styles = StyleSheet.create({
    options: {
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 200
    },

    picker: {
        height: 50,
        width: 150
    }
});

export default Options;