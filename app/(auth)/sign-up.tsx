import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  // Define state for name, email, password, and verification inputs
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      // Perform sign-up action
      await signUp.create({
        emailAddress,
        password,
      });

      // Prepare for email verification
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (err: any) {
      setError(err.errors ? err.errors[0].message : "Sign-up failed");
      console.error("Error in sign up: ", err);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      // Attempt to verify the email with the entered code
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      // Check if sign-up is complete
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/"); // Redirect to homepage after successful sign-up
      } else {
        console.error("Sign-up not complete: ", completeSignUp);
        setError("Verification failed, please check the code.");
      }
    } catch (err: any) {
      setError(err.errors ? err.errors[0].message : "Verification failed");
      console.error("Error in verification: ", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      {/* Title */}
      <Text className="text-3xl font-semibold text-gray-800 mb-8">Sign Up</Text>

      {/* Error Message */}
      {error && <Text className="text-red-500 mb-4">{error}</Text>}

      {/* Name Input */}
      <View className="w-full mb-5">
        <Text className="text-gray-600 mb-2">Name</Text>
        <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
          <FontAwesome name="user" size={18} color="#A0AEC0" className="mr-2" />
          <TextInput
            className="flex-1 ml-3 p-2"
            placeholder="Enter your name"
            placeholderTextColor="#A0AEC0"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

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
            value={emailAddress}
            onChangeText={setEmailAddress}
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

      {/* Verification Code Input (only if pending verification) */}
      {pendingVerification && (
        <View className="w-full mb-6">
          <Text className="text-gray-600 mb-2">Verification Code</Text>
          <View className="flex-row items-center border border-gray-300 rounded-full px-3 py-2">
            <FontAwesome
              name="check-circle"
              size={18}
              color="#A0AEC0"
              className="mr-2"
            />
            <TextInput
              className="flex-1 ml-3 p-2"
              placeholder="Enter the code"
              placeholderTextColor="#A0AEC0"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
            />
          </View>
        </View>
      )}

      {/* Sign Up or Verify Button */}
      <TouchableOpacity
        onPress={pendingVerification ? onPressVerify : onSignUpPress}
        className="bg-purple-800 py-4 px-6 rounded-full w-full justify-center items-center mb-4"
      >
        <Text className="text-white text-base font-semibold">
          {pendingVerification ? "Verify Code" : "Sign Up"}
        </Text>
      </TouchableOpacity>

      {/* Already have an account? Link to Sign In */}
      <Text className="text-gray-500 text-sm">
        Already have an account?{" "}
        <TouchableOpacity onPress={() => router.push("/sign-in")}>
          <Text className="text-purple-500 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
