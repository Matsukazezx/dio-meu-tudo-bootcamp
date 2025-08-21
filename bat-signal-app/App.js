import 'react-native-gesture-handler'; 
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import FormScreen from './src/screens/FormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0b1220" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0b1220' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#0b1220' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bat-Signal' }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Request Assistance' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
