import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";

export default function Profile({ navigation }) {
  const email = useSelector((state) => state.counter.email);
  const token = useSelector((state) => state.counter.token);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    image: "",
    bio: "",
    friends: [],
    messages: [],
    unread: [],
    req: [],
  });
  const getUser = () => {
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

    fetch("http://192.168.1.38:5000/user/getUser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let data = {
          id: result._id,
          name: result.name,
          email: result.email,
          image: result.image,
          bio: result.bio,
          friends: result.friends,
          messages: result.messages,
          unread: result.unread,
          req: result.req,
        };
        setUserData(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView className="bg-[#e2eefe] h-full">
      <Header navigation={navigation} />
      <View className="h-[662px] gap-6 flex items-center justify-center">
        <View className="flex gap-4 flex-row items-center">
          <View className="h-28 w-28 bg-red-100 rounded-full overflow-hidden">
            <Image src={userData.image} className="h-28 w-28" />
          </View>
          <View>
            <Text className="text-[#3634a9]">{userData.name}</Text>
            <Text className="text-2xl text-[#3634a9] font-semibold">
              {userData.friends.length} Friends
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-[#3634a9]">{userData.bio}</Text>
        </View>
        <TouchableOpacity className="px-4 py-3 rounded-xl bg-[#3634a9]">
          <Text className="text-white">Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
