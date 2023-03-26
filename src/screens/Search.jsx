import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard } from "react-native";

export default function Search({ navigation }) {
  const search = () => {
    Keyboard.dismiss;
  };

  return (
    <SafeAreaView className="bg-[#e2eefe]">
      <Header navigation={navigation} />
      <View className="h-[640px]">
        <View className="flex flex-row mt-4 mx-4 items-center bg-gray-100 h-10 rounded-xl">
          <TextInput className="w-11/12 px-2 " placeholder="Search"></TextInput>
          <TouchableOpacity onPress={search}>
            <Ionicons name="md-search" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
