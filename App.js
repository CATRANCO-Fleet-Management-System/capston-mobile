import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DispatchScreen from './screens/navigation/DispatchScreen'; // Import the tab navigator (DispatchScreen)
import EditAccountScreen from './screens/EditAccountScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* Use the DispatchScreen which contains the Tab.Navigator as the Home */}
        <Stack.Screen name="Home" component={DispatchScreen} />
        <Stack.Screen name="EditAccount" component={EditAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
