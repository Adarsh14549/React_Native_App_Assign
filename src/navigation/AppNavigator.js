import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserScreen} options={{ title: "User Details" }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
