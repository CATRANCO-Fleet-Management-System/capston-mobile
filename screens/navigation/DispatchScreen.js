// navigation/DispatchScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../HomeScreen'; // Import HomeScreen
import SettingsScreen from '../SettingsScreen'; // Import SettingsScreen

const Tab = createBottomTabNavigator();

export default function DispatchScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'bus' : 'bus-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0747fb',
        tabBarInactiveTintColor: 'gray',
         tabBarStyle: { 
          borderTopLeftRadius: 20,borderTopRightRadius: 20, 
          position: 'absolute',       
          left: 10,                  
          right: 10,                                 
          backgroundColor: 'white',   
         },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{
    headerTransparent: true, // Make the header transparent
       }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
    headerTransparent: true, // Make the header transparent
       }}
      />
    </Tab.Navigator>
  );
}
