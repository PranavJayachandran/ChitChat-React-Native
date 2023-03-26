import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function Mutuals({ item }) {
  useEffect(() => {
    console.log(item["name"]);
  });
  return (
    <View className="mr-6 py-4 px-4 rounded-xl bg-white">
      <View className="border-b flex items-center justify-center pb-4 border-gray-400">
        <View className="h-16 rounded-full bg-blue-100 w-16"></View>
      </View>
      <View></View>
      <View className="mt-4 bg-[#3b82f6] rounded-xl items-center flex justify-center px-2 py-2">
        <Text className="text-xs text-white">Add Friend</Text>
      </View>
    </View>
  );
}
export default function MeetPeople({ navigation }) {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      email: "",
      image: "",
      bio: "",
      friends: [],
      messages: [],
      unread: [],
      req: [],
    },
    {
      id: "",
      name: "",
      email: "",
      image: "",
      bio: "",
      friends: [],
      messages: [],
      unread: [],
      req: [],
    },
    {
      id: "",
      name: "",
      email: "",
      image: "",
      bio: "",
      friends: [],
      messages: [],
      unread: [],
      req: [],
    },
    {
      id: "",
      name: "",
      email: "",
      image: "",
      bio: "",
      friends: [],
      messages: [],
      unread: [],
      req: [],
    },
    {
      id: "",
      name: "",
      email: "",
      image: "",
      bio: "",
      friends: [],
      messages: [],
      unread: [],
      req: [],
    },
  ]);
  const token = useSelector((state) => state.counter.token);

  const getUsers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = "";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.1.38:5000/user/getUsers", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result[0].name))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    console.log("Hai");
  }, []);

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
                <Mutuals item={item} />
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
