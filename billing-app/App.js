import '@expo/metro-runtime';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';

import style from './assets/Style';
import BudgetEntry from './src/Screens/BudgetEntry/BudgetEntry';
import { store, persistor} from './src/reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import BudgetListingPage from './src/Screens/BudgetListing/BudgetListingPage';
import { Button } from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <SafeAreaProvider>
          <SafeAreaView style={style.styleAreaView}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='BudgetEntry' component={BudgetEntry} options={({ navigation }) => ({
                  title: "Budget Entry", 
                  headerRight: () => (
                    <Button title='Show Items' onPress={() => navigation.navigate("BudgetEntryList")} />
                  ) 
                })}></Stack.Screen>
                <Stack.Screen name='BudgetEntryList' component={BudgetListingPage} options={{ title: "Budget Entry Listing" }}  ></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

