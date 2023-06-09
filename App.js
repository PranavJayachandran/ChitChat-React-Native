import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import FriendsPage from './src/screens/FriendsPage';
import Login from './src/screens/Login';
import MeetPeople from './src/screens/MeetPeople';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/screens/Search';
import Notifications from './src/screens/Notifications';
import Chat from './src/screens/Chat';
import Chating from './src/screens/Chating';
import AddDetails from './src/screens/AddDetails';
import People from "./src/screens/People";
import { store } from './redux/app/store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MeetPeople" component={MeetPeople} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Friends" component={FriendsPage} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Chatting" component={Chating} />
          <Stack.Screen name="AddDetails" component={AddDetails} />
          <Stack.Screen name="People" component={People} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
