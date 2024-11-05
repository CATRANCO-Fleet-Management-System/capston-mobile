import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const settingsOptions = [
  { icon: 'person-outline', label: 'My Account', key: 'account' },
  { icon: 'information-circle-outline', label: 'About Us', key: 'about' },
  { icon: 'document-outline', label: 'Terms and Conditions', key: 'terms' },
  { icon: 'lock-closed-outline', label: 'Privacy Statement', key: 'privacy' },
  { icon: 'log-out-outline', label: 'Logout', key: 'logout' }, // New Logout item
];

export default function SettingsScreen() {
  const navigation = useNavigation();

  const handlePress = (key) => {
   if (key === 'account') {
      navigation.navigate('EditAccount'); // Navigate to EditAccountScreen
    } else if (key === 'logout') {
      navigation.replace('Login');
    }
    // Add other navigation options here if needed
  };

  return (
    <LinearGradient
      colors={['#f9fbff', '#ecfae6', '#c5d5f9', '#9a92ff']}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center">
        <View className="w-4/5 h-2/3 border border-gray-400 rounded-md bg-white"
          style={{ width: width * 0.8,
                   height: height * 0.6,}}
        >
          <FlatList
            data={settingsOptions}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item.key)} className="flex-row items-center p-4 border-b border-gray-200">
                <Ionicons name={item.icon} size={24} color="gray" />
                <Text className="ml-4 text-gray-700">{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
