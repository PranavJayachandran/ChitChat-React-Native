import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function People({ route, navigation }) {
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
  useEffect(() => {
    setUserData(route.params.item);
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
          <Text className="text-white">Add Friend</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}
