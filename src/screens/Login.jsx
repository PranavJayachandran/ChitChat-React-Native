import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { storeToken } from "../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setEmail } from "../../redux/counter/counterSlice";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmailLocal] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let token = "";

    await fetch("http://192.168.1.38:5000/login", requestOptions)
      .then((response) => response.text())
      .then((result) => (token = result))
      .catch((error) => console.log("error", error));

    if (token.substring(2, 7) === "error") console.log(token);
    else {
      dispatch(setToken(token));
      dispatch(setEmail(email));
      navigation.navigate("Profile");
    }
  };
  return (
    <SafeAreaView className="bg-[#e2eefe]">
      <View className="flex justify-center items-center h-full gap-2">
        <View>
          <Text className="text-2xl font-semibold">Login into ChitChat</Text>
        </View>
        <View>
          <Text className="text-lg font-light">Find all your friend here</Text>
        </View>
        <View className="pt-4 w-full flex flex-col gap-2 px-16">
          <View className="">
            <TextInput
              className="bg-gray-100 h-10 rounded-xl px-2  w-full"
              placeholder="Email"
              onChangeText={(email) => {
                setEmailLocal(email);
              }}
            ></TextInput>
          </View>
          <View>
            <TextInput
              className="bg-gray-100 h-10 rounded-xl px-2  w-full"
              placeholder="Emter Password"
              onChangeText={(password) => {
                setPassword(password);
              }}
            ></TextInput>
          </View>
        </View>
        <View className="w-full px-16">
          <TouchableOpacity onPress={handleLogin}>
            <View className="mt-2 bg-[#3b82f6] rounded-full items-center flex justify-center px-4 py-2">
              <Text className="text-md text-white">Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
