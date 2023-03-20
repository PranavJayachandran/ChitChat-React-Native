import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <View className="bg-[#e2eefe] flex justify-center items-center h-full gap-2">
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
              placeholder="Username"
            ></TextInput>
          </View>
          <View>
            <TextInput
              className="bg-gray-100 h-10 rounded-xl px-2  w-full"
              placeholder="Emter Password"
            ></TextInput>
          </View>
        </View>
        <View className="w-full px-16">
          <TouchableOpacity>
            <View className="mt-2 bg-[#3b82f6] rounded-full items-center flex justify-center px-4 py-2">
              <Text className="text-md text-white">Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
