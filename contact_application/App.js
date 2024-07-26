import "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MasterDetail from "./src/Components/MasterDetail/MasterDetail";
import AddContact from "./src/screens/AddContact/AddContact";
import CameraComp from "./src/Components/CameraComp/CameraComp";
import { useEffect } from "react";

import db from './src/db/db';

export default function App() {

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS contact(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          mobileNumber TEXT,
          landLine TEXT,
          photoURI TEXT,
          fav INTEGER DEFAULT false
        )
      `)
    });

  }, []);

  const Stack = createNativeStackNavigator();

  return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} >
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={MasterDetail} options={{ headerShown: false }} ></Stack.Screen>
              <Stack.Screen name="AddContact" component={AddContact} options={({route}) => ({ title: route.params.type === "Add" ? "Add New Contact" : "Update Contact" })} ></Stack.Screen>
              <Stack.Screen name="Camera" component={CameraComp} options={{ 
                headerTransparent: true,
                headerTintColor: 'white',
                headerBackground: () => (
                  <View style={{ backgroundColor: 'rgba(0, 0, 0, .3)', flex: 1 }} />
                )
              }} ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}
