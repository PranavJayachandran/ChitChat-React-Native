import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MessageInChat from "../components/MessageInChat";

export default function Chating({ navigation }) {
  const messages = [
    {
      name: "Hai",
      you: false,
    },

    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
    {
      name: "Hai",
      you: false,
    },
    {
      name: "Hello",
      you: true,
    },
  ];
  return (
    <SafeAreaView className="bg-[#3a54aa]">
      <View className="flex flex-row py-4 pl-4 items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <View className="h-10 w-10 bg-red-100 rounded-full ml-4"></View>
        <Text className="text-white text-2xl ml-2">Hai</Text>
      </View>
      <View className="bg-[#e2eefe] ">
        <ScrollView className="h-[630px]">
          {messages.map((item) => (
            <MessageInChat item={item} />
          ))}
        </ScrollView>
        <View className="bg-[#e2eefe] pb-40 flex flex-row  px-2 ">
          <View className="w-full flex flex-row h-10 w-full px-2 bg-gray-100 rounded-xl">
            <TextInput
              className="flex-1"
              placeholder="Send message"
            ></TextInput>
            <View className="flex itmes-center justify-center">
              <MaterialCommunityIcons name="send" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
