import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView className="bg-[#e2eefe] h-full">
      <Header navigation={navigation} />
      <View className="h-[662px] gap-6 flex items-center justify-center">
        <View className="flex gap-4 flex-row items-center">
          <View className="h-28 w-28 bg-red-100 rounded-full"></View>
          <View>
            <Text className="text-[#3634a9]">Pranav Jayachandran</Text>
            <Text className="text-2xl text-[#3634a9] font-semibold">
              3 Friends
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-[#3634a9]">Hi there, I am here</Text>
        </View>
        <TouchableOpacity className="px-4 py-3 rounded-xl bg-[#3634a9]">
          <Text className="text-white">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
