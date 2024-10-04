import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();

  // Define state for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      {/* Title */}
      <Text className="text-3xl font-semibold text-gray-800 mb-8">Sign In</Text>

      {/* Email Input */}
      <View className="w-full mb-5">
        <Text className="text-gray-600 mb-2">Email</Text>
        <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
          <FontAwesome
            name="envelope"
            size={18}
            color="#A0AEC0"
            className="mr-2"
          />
          <TextInput
            className="flex-1 ml-3 p-2"
            placeholder="Enter your email"
            placeholderTextColor="#A0AEC0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="w-full mb-6">
        <Text className="text-gray-600 mb-2">Password</Text>
        <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
          <FontAwesome name="lock" size={18} color="#A0AEC0" className="mr-2" />
          <TextInput
            className="flex-1 ml-3 p-2"
            placeholder="Enter your password"
            placeholderTextColor="#A0AEC0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity className="bg-purple-800 py-4 px-6 rounded-full w-full justify-center items-center mb-4">
        <Text className="text-white text-base font-semibold">Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text className="text-gray-500 text-sm my-4">OR</Text>

      {/* Sign In with Google */}
      <TouchableOpacity className="bg-gray-100 py-4 px-6 rounded-full w-full flex-row justify-center items-center mb-4">
        <FontAwesome name="google" size={20} color="#4285F4" className="mr-3" />
        <Text className="text-gray-700 text-base ml-3">
          Sign in with Google
        </Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text className="text-gray-500 text-sm">
        Don’t have an account?{" "}
        <TouchableOpacity onPress={() => router.push("/sign-up")}>
          <Text className="text-purple-500 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
