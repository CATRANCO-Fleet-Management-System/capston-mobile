import React from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const App = () => {
  
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />

      {/* LinearGradient Background */}
      <LinearGradient
        colors={['#9a92ff', '#c5d5f9', '#ecfae6', '#f9fbff']} // Gradient background (light blue gradient)
        style={{ flex: 1 }}
      >
        {/* Scrollable Form */}
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: width * 0.08, paddingBottom: height * 0.05, paddingTop: height * 0.05 }} // Adjust padding for space above
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"  // Ensures taps outside the input fields work properly
        >
          {/* Logo and SignUp Text */}
          <View className="flex items-center mb-12">
            <Text className="text-white text-4xl font-bold mt-4">Sign Up</Text>
          </View>

          {/* Input Fields */}
          <View className="space-y-4">
            <View className="bg-white p-5 rounded-2xl w-full">
              <TextInput placeholder="First name" placeholderTextColor="gray" />
            </View>
            <View className="bg-white p-5 rounded-2xl w-full">
              <TextInput placeholder="Last name" placeholderTextColor="gray" />
            </View>
            <View className="bg-white p-5 rounded-2xl w-full">
              <TextInput placeholder="Username" placeholderTextColor="gray" />
            </View>
            <View className="bg-white p-5 rounded-2xl w-full">
              <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
              />
            </View>
            <View className="bg-white p-5 rounded-2xl w-full mb-3">
              <TextInput
                placeholder="Re-type Password"
                placeholderTextColor="gray"
                secureTextEntry
              />
            </View>

            {/* SignUp Button */}
            <View className="w-full">
              <TouchableOpacity className="mt-8 h-12 w-full">
                <LinearGradient
                  colors={['#3b82f6', '#ef4444']} // Button gradient colors (blue to red)
                  start={[0, 0]} 
                  end={[1, 0]} 
                  className="flex-1 justify-center rounded-2xl"
                >
                  <Text className="text-xl font-bold text-white text-center">Create Account</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Go Back Button */}
            <View>
              <TouchableOpacity
                className="w-full border border-blue-600 justify-center items-center rounded-2xl py-2"
                onPress={() => navigation.navigate('Login')}
              >
                <Text className="text-center text-blue-600">Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default App;
