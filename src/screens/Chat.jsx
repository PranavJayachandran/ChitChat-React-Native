import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import Message from "../components/Message";
import { useSelector } from "react-redux";

export default function Chat({ navigation }) {
  const [chats, setChats] = useState([]);
  const [unique_chat, setUnique_Chat] = useState([]);
  const token = useSelector((state) => state.counter.token);
  const email = useSelector((state) => state.counter.email);
  const getChats = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.1.38:5000/user/getChats", requestOptions)
      .then((response) => response.json())
      .then((result) => setChats(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    var chat = new Set();
    chats.forEach((element) => {
      chat.add(element);
    });
    setUnique_Chat(Array.from(chat));
  }, [chats]);

  useEffect(() => {
    console.log("Unique", unique_chat);
  }, []);
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
          {unique_chat.map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Chatting", {
                  name: item.data.user,
                });
              }}
            >
              <Message item={item.data} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
