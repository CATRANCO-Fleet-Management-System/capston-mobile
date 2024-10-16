import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

export default function SettingsScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text className="mr-2 text-blue-700 px-2 py-1 border border-blue-700 rounded-md">Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#f9fbff', '#ecfae6', '#c5d5f9', '#9a92ff']}  // Gradient colors
      className="flex-1"  // Apply the gradient style using NativeWind
    >
      <View className="flex-1 justify-center items-center">
        <Text>Settings Screen??!</Text>
      </View>
    </LinearGradient>
  );
}
