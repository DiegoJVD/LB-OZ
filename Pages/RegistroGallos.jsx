import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React, { useState } from 'react'
import * as SQLite from "expo-sqlite";

function openDatabase() {
    const db = SQLite.openDatabase("db.db");
    console.log(db);
    return db;
}

const db = openDatabase();


const CrearGallo = (gallo) => {
    

    db.transaction(
        (tx) => {
            tx.executeSql("insert into gallos (name, date, color) values (?, ?, ?)", [gallo.name, gallo.date, gallo.color]);
            tx.executeSql("select * from gallos", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
            );
        },
        null,
        null
    );
};

const RegistroGallos = () => {
    let [gallo, setGallo] = useState({});
    
    return (
        <View style={styles.principalView}>
            <View>
                <Image source={require('../assets/icon.png')} style={styles.image} />
            </View>
            <View style={{ marginTop: '10%' }}>
                <TextInput style={styles.input} value={gallo.name} onChangeText={(e) => setGallo({...gallo, name : e}) } placeholder='Nombre' />
                <TextInput style={styles.input} value={gallo.date} onChangeText={(e) => setGallo({...gallo, date : e}) } placeholder='Fecha Marca' />
                <TextInput style={styles.input} value={gallo.color} onChangeText={(e) => setGallo({...gallo, color : e}) } placeholder='Color' />
                {/* <TextInput style={styles.input} placeholder='Nombre'/> */}
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => CrearGallo(gallo)}
                        style={styles.button}
                    >
                        <Text style={{ color: "white" }}>Crear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        // backgroundColor: 'red',
    },
    principalView: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        borderRadius: 10,
        width: 200,
        height: 40,
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 10,
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

})

export default RegistroGallos