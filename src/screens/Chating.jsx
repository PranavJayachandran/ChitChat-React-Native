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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function Chating({ route, navigation }) {
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

  const chat_user_name = route.params.name;
  const token = useSelector((state) => state.counter.token);
  const email = useSelector((state) => state.counter.email);
  const [chats, setChats] = useState([]);

  const getChatForThisUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_email: email,
      chat_user_name: chat_user_name,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.1.38:5000/user/getChatsFrom", requestOptions)
      .then((response) => response.json())
      .then((result) => setChats(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getChatForThisUser();
  }, []);

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
        <Text className="text-white text-2xl ml-2">{chat_user_name}</Text>
      </View>
      <View className="bg-[#e2eefe] ">
        <ScrollView className="h-[630px]">
          {chats.map((item) => (
            <MessageInChat item={item.data} you={item.yours} />
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
