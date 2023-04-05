import { View, Text } from "react-native";
import React from "react";

export default function Message({ item }) {
  return (
    <View>
      <View className="flex flex-row w-full justify-around mt-4 ">
        <View className="h-16 w-16 bg-red-100 rounded-full"></View>
        <View className="flex  mt-2  w-44">
          <Text>{item.user}</Text>
          <Text className="font-light">{item.content}</Text>
        </View>
        <View className="mt-2 ">
          <Text className="font-light">{item.time}</Text>
        </View>
      </View>
    </View>
  );
}
