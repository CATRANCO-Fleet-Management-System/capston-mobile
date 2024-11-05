import React from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const App = () => {
  
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView 
      className="bg-white h-full w-full"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}  // Keyboard behavior for iOS
    >
      <StatusBar style="light" />

      {/* LinearGradient Background */}
      <LinearGradient
        colors={['#f9fbff', '#ecfae6', '#c5d5f9', '#9a92ff']}  // Updated gradient colors
        style={{ flex: 1 }}
      >
       
     
        {/* Logo */}
        <View className="flex-row justify-around w-full absolute">
          <Image style={{ height: height * 0.3, width: width * 0.9 }} resizeMode='contain' source={require('../assets/images/logo.png')} />
        </View>
      
        {/* Fillup Form */}
        <ScrollView
          className="h-full w-full flex-justify-around pt-40 pb-10"
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 30 }}
        >
          <View className="flex-items-center"></View>

          {/* Form Fields */}
          <View className="pt-20 flex item-center mx-4 space-y-4">
            <View className="bg-black/10 p-5 rounded-2xl w-full">
              <TextInput placeholder='Username' placeholderTextColor={'gray'} />
            </View>
            <View className="bg-black/10 p-5 rounded-2xl w-full mb-3">
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
            </View>

            {/* Login Button */}
            <View style={{ }}>
              <TouchableOpacity className="mt-8 h-12 w-full text-white text-xl font-bold"
                style={{ width: '100%', height: height * 0.075, overflow: 'hidden' }} 
              >
                <LinearGradient
                  colors={['#3b82f6', '#ef4444']}  // Gradient for the Login button
                  start={[0, 0]} end={[1, 0]}
                  className="flex-1 justify-center rounded-2xl">
                  <Text style={{ fontSize: width * 0.03 }} className="text-xl font-bold text-white text-center">Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            {/* Create Account Button */}
            <View>
              <TouchableOpacity
                className="w-full border border-blue-600 justify-center items-center rounded-2xl py-2"
                onPress={() => navigation.navigate('Signup')}
              >
                <Text style={{ fontSize: width * 0.04 }} className="text-center text-blue-600">Create Account</Text>
              </TouchableOpacity>
            </View>

            {/* Test Button */}
            <View>
              <TouchableOpacity
                className="w-full border border-blue-600 justify-center items-center rounded-2xl py-2"
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={{ fontSize: width * 0.04 }} className="text-center text-blue-600">Test Button</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default App;
