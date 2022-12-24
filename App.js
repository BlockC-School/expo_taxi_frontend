import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
