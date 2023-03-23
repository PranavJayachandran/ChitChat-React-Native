import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function Mutuals({ data }) {
  return (
    <View className="mr-6 py-4 px-4 rounded-xl bg-white">
      <View className="border-b flex items-center justify-center pb-4 border-gray-400">
        <View className="h-16 rounded-full bg-blue-100 w-16"></View>
      </View>
      <View className="mt-4 bg-[#3b82f6] rounded-xl items-center flex justify-center px-2 py-2">
        <Text className="text-xs text-white">Add Friend</Text>
      </View>
    </View>
  );
}
export default function MeetPeople({ navigation }) {
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
    <SafeAreaView className="h-full">
      <Header navigation={navigation} />
      <View className="h-[640px] flex items-center justify-center bg-[#e2eefe]">
        <View className="w-full px-10">
          <Text className="text-xl font-semibold">Recommendation</Text>
          <ScrollView className="flex flex-row pt-4" horizontal>
            <View className="flex flex-row ">
              {data.map((item) => (
                <Mutuals />
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="w-full mt-20 px-10">
          <Text className="text-xl font-semibold ">Meet New People</Text>
          <ScrollView className="flex flex-row pt-4" horizontal>
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
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
