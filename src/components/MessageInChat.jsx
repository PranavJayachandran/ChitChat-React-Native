import { View, Text } from "react-native";
import React from "react";

export default function MessageInChat({ item, you }) {
  return (
    <View className="flex mx-4 mt-4">
      <View className={`flex flex-row ${you ? "justify-end" : ""}`}>
        <Text
          className={` ${
            you ? "bg-[#3a54aa] text-gray-100" : " bg-white"
          } py-2 max-w-[200px] rounded-2xl justify-center px-6`}
        >
          {item.content}
        </Text>
      </View>
    </View>
  );
}
