import './polyfills';
import { ScrollView , Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StatusBar, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import useUtils from './useUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Peso() {
  const [libra, setLibra] = useState(0.0);
  const [libraOZ, setLibraOZ] = useState('');
  const { libraToOnza } = useUtils();
  const handleChange = (text) => {
    setLibra(text);
    setLibraOZ(libraToOnza(text));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea} >

        <StatusBar backgroundColor="purple" />
        <View style={styles.container} onPress={() => setLibra(libra + 1)}>
          <View style={styles.centerView}>
            {/* <Text style={styles.text}>Introduce las libras</Text> */}
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
  );
}

function prueba() {

  return (
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.paragraph}>
          This is a ScrollView example HEADER.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
            This is a ScrollView example paragraph.
        </Text>
        <Text style={styles.paragraph}>
          This is a ScrollView example FOOTER.
        </Text>
      </ScrollView>
  );
}

function Gallos() {
 // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea} >

        <View style={{...styles.gallosContainer, backgroundColor: "blue", maxHeight: 70}}>
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
          nestedScrollEnabled = {true}
          contentContainerStyle={{flex:0}}
          style={styles.scrollView}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((gallo, index) => {
                return (
                  <View key={index} style={styles.carta}>
                    <Text style={{...styles.text, padding: 10, width: 300}}>Gallo {index}</Text>
                  </View>
                );
              }
              )
            }
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Peso') {
              iconName = focused
                ? 'scale'
                : 'scale';
            } else if (route.name === 'Gallos') {
              iconName = focused ? 'playlist-minus' : 'playlist-minus';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Peso" component={Peso} />
        <Tab.Screen name="Gallos" component={Gallos} />
        <Tab.Screen name="prueba" component={prueba} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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

    // marginTop: 10,
    // width: Dimensions.get('window').width,
    // height: 100,
    // backgroundColor: 'red',
    // margin: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }


});
