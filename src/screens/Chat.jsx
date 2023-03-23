import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import Message from "../components/Message";

export default function Chat({ navigation }) {
  const messages = [
    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },

    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },
    {
      name: "Alex Blaze",
    },
  ];
  return (
    <SafeAreaView className="bg-[#e2eefe]">
      <Header navigation={navigation} />
      <ScrollView className="h-[640px]">
        <View className="flex flex-row mt-4 mx-4 items-center bg-gray-100 h-10 rounded-xl">
          <TextInput className="w-11/12 px-2 " placeholder="Search"></TextInput>
          <TouchableOpacity onPress={Keyboard.dismiss}>
            <Ionicons name="md-search" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View>
          {messages.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Chatting");
              }}
            >
              <Message item={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
