import { View, Text } from "react-native";
import React from "react";

export default function Message({ item }) {
  return (
    <View>
      <View className="flex flex-row justify-around mt-4 ">
        <View className="h-16 w-16 bg-red-100 rounded-full"></View>
        <View className="flex -ml-12 mt-2 ">
          <Text>{item.name}</Text>
          <Text className="font-light">lastmessage</Text>
        </View>
        <View className="mt-2 ">
          <Text className="font-light">12:10pm</Text>
        </View>
      </View>
    </View>
  );
}
