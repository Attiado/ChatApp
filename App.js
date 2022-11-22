import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Button , ImageBackground , TouchableOpacity , Alert } from 'react-native';
import { useRef , useState} from 'react';
import { TextInput } from 'react-native';
import Auth from './Screens/Auth';
import Accueil from './Screens/Accueil';
import SignUp from './Screens/SignUp';
import Chat from './Screens/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="auth" component={Auth} options={{headerShown:false}}>
        </Stack.Screen>
        <Stack.Screen name="acc" component={Accueil} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="signup" component={SignUp} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="chat" component={Chat} options={{headerShown:false}}></Stack.Screen>

      </Stack.Navigator>
      </NavigationContainer>
  );
};
