import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Mutuals({ data }) {
  return (
    <View className="mr-6 py-4 px-4 rounded-xl bg-red-100">
      <View className="border-b pb-4 border-gray-400">
        <View className="h-24 rounded-full bg-blue-100 w-24"></View>
      </View>
      <View className="mt-4  bg-[#3b82f6] rounded-xl items-center flex justify-center px-4 py-2">
        <Text className="text-white">Add Friend</Text>
      </View>
    </View>
  );
}
export default function MeetPeople() {
  let data = [
    {
      name: "Name",
      image: "",
    },
    {
      name: "Name",
      image: "",
    },
    {
      name: "Name",
      image: "",
    },
    {
      name: "Name",
      image: "",
    },

    {
      name: "Name",
      image: "",
    },
  ];
  return (
    <SafeAreaView className="h-full items-center flex justify-center">
      <View className="w-full px-10">
        <Text className="text-2xl font-semibold ">Recommendation</Text>
        <ScrollView className="flex flex-row" horizontal>
          <View className="flex flex-row ">
            {data.map((item) => (
              <Mutuals />
            ))}
          </View>
        </ScrollView>
      </View>
      {/* <View>
        <Text>Recommendation</Text>
        {data.map((item) => (
          <Mutuals />
        ))}
      </View> */}
    </SafeAreaView>
  );
}
