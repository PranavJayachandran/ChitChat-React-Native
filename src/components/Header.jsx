import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className=" -mt-10 pt-14 bg-[#3a54aa] pb-4 flex flex-row px-6 justify-between items-center">
      <View>
        <Text className="text-white text-4xl font-bold">ChitChat</Text>
      </View>
      <View>
        <MaterialIcons name="message" size={20} color="white" />
      </View>
    </View>
  );
}
