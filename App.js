import './polyfills';
import Peso from './Pages/Peso';
import Gallos from './Pages/Gallos';
import RegistroGallos from './Pages/RegistroGallos';
import Prueba from './Pages/Prueba';
import { ScrollView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, StatusBar, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import useUtils from './useUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { openDatabase } from 'react-native-sqlite-storage';

// const db = openDatabase(
//   {
//     name: 'UserDatabase.db',
//   }
// )

const Tab = createBottomTabNavigator();


// const Prueba = () => {

//   const addCategory = () => {
//   }

//   useEffect(() => {
//     createTables();
//   }, [])

//   const createTables = () => {
//     db.transaction( txn => {
//       txn.executeSql(
//         'CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
//         [],
//         (sqlTxn , res) => {
//           console.log("Table created successfully");
//         },
//         (error) => {
//           console.log(error);
//         }
//       )
//     })
//   }

//   const [categoryName, setCategoryName] = useState('');
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder='Enter Category Name'
//         value={categoryName}
//         onChangeText={(text) => setCategoryName(text)}
//         />
//       <Button
//         title='Add Category'
//         onPress={() => addCategory()} />

//       </View>
//   );
// } // End of App

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
        {/* <Tab.Screen name="Prueba" component={Prueba} /> */}
        <Tab.Screen name="Peso" component={Peso} />
        <Tab.Screen name="Gallos"  component={Gallos} />
        <Tab.Screen name="Registro de Gallos" component={RegistroGallos} />
        <Tab.Screen name="Prueba" component={Prueba} /> 
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

  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 40
  }


});
