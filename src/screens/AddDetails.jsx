import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddDetails({ navigation }) {
  return (
    <SafeAreaView className="bg-[#e2eefe] h-full flex justify-center items-center">
      <View className="bg-blue-400 rounded-full h-24 w-24 "></View>
      <View className="bg-blue-600 -mt-2 flex items-center justify-center text-white h-4 w-4 rounded-xl">
        <Text className="-mt-[1px] text-white">+</Text>
      </View>
      <View className="mt-4">
        <TextInput
          placeholder="UserName"
          className="bg-gray-100 w-60 h-10 rounded-xl px-4"
        />
      </View>
      <View className="mt-4 ">
        <TextInput
          placeholder="Bio"
          className="bg-gray-100 w-60 h-10 rounded-xl px-4"
        />
      </View>
      <View className="px-4 py-2 bg-blue-500 rounded-xl mt-4">
        <Text className="text-white">Submit</Text>
      </View>
    </SafeAreaView>
  );
}
