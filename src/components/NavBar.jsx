import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function NavBar({ navigation }) {
  return (
    <View className="bg-[#3a54aa] py-3  flex flex-row justify-around">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Foundation name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      >
        <Ionicons name="notifications-sharp" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MeetPeople");
        }}
      >
        <Ionicons name="people" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
