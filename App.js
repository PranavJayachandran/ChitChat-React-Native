import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Login from './src/screens/Login';
import MeetPeople from './src/screens/MeetPeople';
import Profile from './src/screens/Profile';

export default function App() {
  return (
    <View className="bg-[#e2eefe] -mb-2">
      {/* <Login /> */}
      {/* <Profile /> */}
      <MeetPeople />
    </View>
  );
}
