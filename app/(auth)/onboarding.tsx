import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 justify-between items-center py-12 bg-white">
      {/* Avatar group image */}
      <Image
        source={require("@/app/assets/images/avatars.png")}
        className="w-64 h-64 mx-auto my-8"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-2xl font-semibold text-center text-gray-800 mb-5">
        Let’s get you a roommate
      </Text>

      {/* Login with Email Button */}
      <TouchableOpacity className="bg-purple-800 py-4 px-6 rounded-full w-4/5 justify-center items-center mb-4">
        <Text className="text-white text-base">Login with Email</Text>
      </TouchableOpacity>

      {/* Login with Google Button */}
      <TouchableOpacity className="bg-gray-100 py-4 px-6 rounded-full w-4/5 mb-4">
        <View className="flex-row justify-center items-center">
          <FontAwesome
            name="google"
            size={24}
            color="#4285F4"
            className="mr-4"
          />
          <Text className="text-gray-700 text-base ml-4">
            Login with Google
          </Text>
        </View>
      </TouchableOpacity>

      {/* Sign Up Option */}
      <Text className="text-gray-500 text-sm">
        Don’t have an account?{" "}
        <Text className="text-purple-500 font-semibold">Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding;
