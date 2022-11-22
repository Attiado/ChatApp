import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Button , ImageBackground , TouchableOpacity , Alert } from 'react-native';
import { useRef , useState} from 'react';
import { TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import List from './Fragments_Home/List';
import Groupe from './Fragments_Home/Groupe';
import Profile from './Fragments_Home/Profile';

// tab : comme menu pour les liens
const Tab = createMaterialBottomTabNavigator();

const image = { uri: "https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMjI3LWYuanBn.jpg" };


export default function Accueil() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="liste" component={List} />

            <Tab.Screen name="groupe" component={Groupe} />
                
            <Tab.Screen name="profile" component={Profile} />
                
        </Tab.Navigator>


      );

};
