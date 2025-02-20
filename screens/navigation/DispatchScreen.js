// navigation/DispatchScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../HomeScreen'; // Import HomeScreen
import SettingsScreen from '../SettingsScreen'; // Import SettingsScreen
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

const Tab = createBottomTabNavigator();

export default function DispatchScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
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
          left: width * 0.03,                  
          right: width *0.03, 
          height: height *0.07,                                
          backgroundColor: 'white',   
         },
      })}
    >
      <Tab.Screen name="Dashboard" component={HomeScreen} 
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
