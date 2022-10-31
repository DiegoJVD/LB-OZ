import { View, Text, StyleSheet, StatusBar, SafeAreaView, TextInput, Dimensions, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as SQLite from "expo-sqlite";

function openDatabase() {
    const db = SQLite.openDatabase("db.db");
    return db;
}

const db = openDatabase();



const Gallos = ({ navigation }) => {

    const [gallos, setGallos] = useState([]);
    const [galloAnterior, setgalloAnterior] = useState([]);
    const [actualizar, setActualizar] = useState(0);

    const getGallos = () => {
        setgalloAnterior(gallos);
        db.transaction(
            async (tx) => {
                tx.executeSql("select * from gallos", [], (_, { rows }) => {
                    console.log("gallosantes", rows._array)
                    setGallos(rows._array);
                }
                );
            },
            null,
            null
        );
    }

    useEffect(() => {
            getGallos();
    }, []);
    return (
        <SafeAreaView style={{ ...styles.safeArea, paddingHorizontal: 10 }} >

            <View style={{ maxHeight: 70 }}>
                <TextInput
                    style={{ ...styles.input, width: '100%', height: '90%', }}
                    placeholder="busqueda"
                    backgroundColor="white"
                />
            </View>
            <View style={styles.gallosContainer}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}
                >
                    {
                        gallos.map((gallo, index) => {
                            return (
                                <View key={index} style={styles.carta}>
                                    <View style={{ height: 100, }}>
                                        <Image
                                            source={{ uri: 'https://unsplash.it/1600/900?random' }}
                                            style={{ width: 150, height: 150, borderRadius: 8 }}
                                        />
                                        {/* <Image
                                            source={require('../assets/icon.png')}
                                            style={{ width: 150, height: 150 }}
                                            backgroundColor="red"
                                        /> */}
                                        {/* <Text style={styles.paragraph}>foto </Text> */}
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <View>
                                            <Text style={{ ...styles.paragraph, textAlign: 'left' }}>Nombre </Text>
                                            <Text style={{ ...styles.inParagraph, textAlign: 'left' }}>{gallo.name} </Text>
                                        </View>
                                        <View>
                                            <Text style={{ ...styles.paragraph, textAlign: 'left' }}>Fecha Marcaje </Text>
                                            <Text style={{ ...styles.inParagraph, textAlign: 'left' }}>{gallo.date} </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gallosContainer: {
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
    },
    carta: {
        // flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        height: 152,
        width: "100%",
        marginBottom: 10,
        // marginTop: 10,
        // width: Dimensions.get('window').width,
        // height: 100,
        // backgroundColor: 'red',
        // margin: 10,
    },
    paragraph: {
        marginLeft: 10,
        marginTop: 10,
        // margin: 24,
        fontSize: 16,
        // fontWeight: 'bold',
        // textAlign: 'center',
    },
    inParagraph: {
        marginLeft: 20,
        // margin: 24,
        fontSize: 14,
        // fontWeight: 'bold',
        // textAlign: 'center',
    },
    scrollView: {
        height: '100%',
        width: '100%',
        marginVertical: 10,
        // margin: 5,
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,

    },
    contentContainer: {
        // paddingVertical: 20,
        // borderWidth: 1,
        borderRadius: 5,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgrey',

    }


});

export default Gallos