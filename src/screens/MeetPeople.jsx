import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function Mutuals({ item, navigation }) {
  return (
    <View className="mr-6 py-4 px-4 rounded-xl bg-white">
      <View className="border-b flex items-center justify-center pb-4 border-gray-400">
        <TouchableOpacity
          className="h-16 rounded-full bg-blue-100 w-16"
          onPress={() => {
            navigation.navigate("People", { item: item });
          }}
        >
          <Image src={item.image} className="h-16 w-16 rounded-full" />
        </TouchableOpacity>
      </View>
      <View className="mt-2 flex items-center">
        <Text>{item.name}</Text>
      </View>
      <View className="mt-2 bg-[#3b82f6] rounded-xl items-center flex justify-center px-2 py-2">
        <Text className="text-xs text-white">Add Friend</Text>
      </View>
    </View>
  );
}

export default function MeetPeople({ navigation }) {
  const [data, setData] = useState([]);
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
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUsers();
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
                <Mutuals item={item} navigation={navigation} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="w-full mt-20 px-10">
          <Text className="text-xl font-semibold ">Meet New People</Text>
          <ScrollView className="flex flex-row pt-4" horizontal>
            <View className="flex flex-row ">
              {data.map((item) => (
                <Mutuals item={item} navigation={navigation} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
