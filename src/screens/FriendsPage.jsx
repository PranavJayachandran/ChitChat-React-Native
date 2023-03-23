import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Friend({ data }) {
  return (
    <View className="w-full mt-4 py-2 border-gray-400 border rounded-xl flex flex-row items-center ">
      <View className="ml-4 h-20 w-20 rounded-full bg-red-100"></View>
      <View className="ml-4 w-[90px]">
        <Text>
          {data.name.substr(0, 10)}
          {data.name.length > 10 ? "...." : ""}
        </Text>
      </View>
      <TouchableOpacity className="bg-[#3634a9] rounded-xl py-2 px-2">
        <Text className="text-white ">Unfriend</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function FriendsPage({ navigation }) {
  const friends = [
    {
      name: "Haiasdaskjsaddskjdsklfjldskfj",
      image: "",
    },
    {
      name: "Hai",
      image: "",
    },
    {
      name: "Hai",
      image: "",
    },
    {
      name: "Hai",
      image: "",
    },
  ];
  return (
    <SafeAreaView className="h-full">
      <Header navigation={navigation} />
      <View className="flex h-[650px]  justify-center items-center gap-2">
        <View>
          <Text className="text-[#5874c5] text-2xl font-semibold">
            Here are all the Friends
          </Text>
        </View>

        <View className="w-full px-10 ">
          <ScrollView className="h-[350px]">
            {friends.map((item) => (
              <Friend data={item} />
            ))}
          </ScrollView>
        </View>
      </View>

      <NavBar />
    </SafeAreaView>
  );
}
