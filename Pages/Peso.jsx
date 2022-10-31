import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import useUtils from '../useUtils.js';
import * as SQLite from "expo-sqlite";

function openDatabase() {
    const db = SQLite.openDatabase("db.db");
    console.log(db);
    return db;
}

const db = openDatabase();

const createTables = () => {
    db.transaction(txn => {
        txn.executeSql(
            'CREATE TABLE IF NOT EXISTS gallos (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), date VARCHAR(20), color VARCHAR(20))',
            [],
            (sqlTxn, res) => {
                console.log("Table created successfully");
            },
            (error) => {
                console.log(error);
            }
        )
    })
}

const Peso = () => {
    const [libra, setLibra] = useState(0.0);
    const [libraOZ, setLibraOZ] = useState('');
    const { libraToOnza } = useUtils();
    const handleChange = (text) => {
        setLibra(text);
        setLibraOZ(libraToOnza(text));
    };

    useEffect(() => {
        createTables();
        console.log('entre a la app');
    }, []);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.safeArea} >

                <StatusBar  backgroundColor="purple" />
                <View style={styles.container} onPress={() => setLibra(libra + 1)}>
                    <View style={styles.centerView}>
                        <TextInput
                            style={styles.input}
                            value={libra}
                            onChangeText={(e) => handleChange(e)}
                            placeholder="Introduzca las libras"
                            keyboardType="numeric"
                        />
                        <Text style={styles.numberText}>{libraOZ == 0.0 ? "0 lbs 0 oz" : libraOZ}</Text>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: "white" }}>Asignar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        backgroundColor: 'red',
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    numberText: {
        fontSize: 40,
        color: 'black',

    },
    Tittletext: {
        fontSize: 20,
        color: 'black'
    },
    input: {
        textAlign: 'center',
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        width: 120,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default Peso