import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard } from "react-native";

function Notification({ item }) {
  return (
    <View className="mt-4 ">
      <View className="flex mx-6 justify-around py-2 rounded-xl border border-gray-400 items-center flex-row ">
        <View className="h-14 w-14 rounded-full bg-red-100"></View>
        <View>
          <Text>
            {" "}
            {item.name.substr(0, 10)}
            {item.name.length > 10 ? "...." : ""}
          </Text>
        </View>
        <View className="flex flex-row gap-2 ">
          <TouchableOpacity className="px-2 py-2 rounded-xl bg-blue-400">
            <Text className="text-white font-semibold">Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 py-2 rounded-xl bg-gray-400">
            <Text className="text-white font-semibold">Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function Notifications({ navigation }) {
  const data = [
    {
      name: "ABxsflkjdslfkdsaflkdsjf",
    },
    {
      name: "ABx",
    },
    {
      name: "ABx",
    },

    {
      name: "ABx",
    },
    {
      name: "ABx",
    },
    {
      name: "ABx",
    },
    {
      name: "ABx",
    },

    {
      name: "ABx",
    },
  ];
  return (
    <SafeAreaView className="bg-[#e2eefe]">
      <Header navigation={navigation} />
      <View className="h-[640px]">
        <View className="px-6 mt-10">
          <Text className="text-xl">Notifications</Text>
        </View>
        <View>
          <ScrollView className="h-[500px]">
            {data.map((item) => (
              <Notification item={item} />
            ))}
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
