import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogIn from './src/Screens/LogIn.js';
import Screen1 from './src/Screens/Screen1.js';
import Screen2 from './src/Screens/Screen2.js';
import Screen3 from './src/Screens/Screen3.js';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }}/>
        <Stack.Screen name="PageTabs" component={PageTabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
  </NavigationContainer>

  );
};
const PageTabs = () => {
    return (
      
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === '2') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              } else if (route.name === 'Home') {
                iconName = focused ? 'md-home' : 'md-home-outline';
              }
              else if(route.name === '3'){
                iconName = focused ? 'ios-person' : 'ios-person-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="1" component={Screen1} />
          <Stack.Screen name="2" component={Screen2}/>
          <Stack.Screen name="3" component={Screen3}/>
        </Tab.Navigator>
      
    );
};

export default App;
