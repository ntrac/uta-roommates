import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      {/* Circle Avatars or Image */}
      <View className="mb-10">
        <Text className="text-lg mb-5">Let's get you a roommate</Text>
      </View>

      {/* Login with Email Button */}
      <TouchableOpacity
        className="bg-purple-800 py-4 px-6 rounded-full w-full justify-center items-center mb-4"
        onPress={() => router.push("/sign-in")}
      >
        <Text className="text-white text-base font-semibold">
          Login with Email
        </Text>
      </TouchableOpacity>

      {/* Login with Google Button */}
      <TouchableOpacity className="bg-gray-100 py-4 px-6 rounded-full w-full flex-row justify-center items-center mb-4">
        <Text className="text-gray-700 text-base">Login with Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text className="text-gray-500 text-sm">
        Don’t have an account?{" "}
        <Text className="text-purple-500 font-semibold">Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding;
