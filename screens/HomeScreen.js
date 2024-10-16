import React from 'react';
import { View, Text, StatusBar } from 'react-native'; // Use StatusBar from react-native
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#f9fbff', '#ecfae6', '#c5d5f9', '#9a92ff']}  // Gradient colors
      className="flex-1"  // Use NativeWind for full screen gradient
    >
      {/* Configure StatusBar */}
      <StatusBar translucent={true} barStyle="dark-content" backgroundColor="transparent" />
        <View className="w-4/5 h-1/3 border border-gray-400 rounded-md bg-white justify-center items-center">
        <Text className="text-gray-600">Map will be placed here</Text>
        </View>
    </LinearGradient>
  );
}
