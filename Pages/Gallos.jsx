import { View, Text, StyleSheet, SafeAreaView, TextInput, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'

const Gallos = () => {
    return (
        <SafeAreaView style={styles.safeArea} >

            <View style={{ maxHeight: 70 }}>
                <TextInput
                    onChangeText={() => console.log(Dimensions.get('window'))}
                    style={styles.input}
                    height={60}
                    width={Dimensions.get('window').width}
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
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0].map((gallo, index) => {
                            return (
                                <View key={index} style={styles.carta}>
                                    <View style={{backgroundColor: 'blue', height: 100,}}>
                                        {/* <Image 
                                            source={{ uri: 'icon.png' }}
                                            style={{ width: 400, height: 400 }} 
                                        /> */}
                                        <Image
                                            source={require('../assets/icon.png')}
                                            style={{ width: 150, height: 150 }}
                                            backgroundColor="red" 
                                        />
                                        {/* <Text style={styles.paragraph}>foto </Text> */}
                                    </View>
                                    <View>
                                        <Text style={styles.paragraph}>info </Text>
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
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
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