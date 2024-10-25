import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants";

const Onboarding = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between bg-white p-6">
        {/* Logo or Header Image */}
        <View className="relative w-full h-[250px]">
          <Image 
            source={images.utalogo} 
            resizeMode="contain" 
            className="z-0 w-full h-full"
          />
        </View>

        {/* Welcome Message */}
        <View className="mt-10">
          <Text className="text-2xl font-semibold text-center text-gray-800">
            Let's get you a roommate!
          </Text>
          <Text className="text-base text-center text-gray-600 mt-2">
            Find the perfect match to share your living space.
          </Text>
        </View>

        {/* Call to Action Button */}
        <View className="w-full">
          <TouchableOpacity
            className="bg-purple-800 py-4 px-6 rounded-full w-full justify-center items-center mb-4"
            onPress={() => router.push("/sign-in")}
            activeOpacity={0.7}
          >
            <Text className="text-white text-base font-semibold">
              Get Started!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
