import React from 'react';
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "./global.css"
import Register from './components/Register';
import List from './components/List';
import About from './components/About';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator      
      screenOptions={{
          headerShown: true,
          headerTitle: '',
          drawerStyle: {
            backgroundColor: "#fdf2f8",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#6b21a8",
          },
          drawerActiveBackgroundColor: "#e9d5ff", 
          drawerActiveTintColor: "#7e22ce",
          drawerInactiveTintColor: "#374151",
        }}>
        <Drawer.Screen name="Registro" component={Register} />
        <Drawer.Screen name="Lista" component={List} />
        <Drawer.Screen name="Acerca de" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

