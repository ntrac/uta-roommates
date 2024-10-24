import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import { TextInput } from 'react-native-gesture-handler';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ModalScreen = () => {
  const { user } = useUser();
  const [image, setImage] = useState<string | undefined>('');
  const [major, setMajor] = useState<string | undefined>('');
  const [age, setAge] = useState<string | undefined>('');
  const [firstName, setFirstName] = useState<string | undefined>('');
  const [lastName, setLastName] = useState<string | undefined>('');
  
  const incompleteForm = !image || !major || !age || !firstName || !lastName;

  const updateUserProfile = async () => {
    try {
      await setDoc(doc(db, 'users', user?.id!), {
        id: user?.id,
        displayName: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: user?.emailAddresses[0]?.emailAddress, // Fetches the first email
        photoURL: image,
        major: major,
        age: age,
        timestamp: serverTimestamp(),
      });
      // Redirect to the home page
      router.push(`../app/(root)/(tabs)/home`);
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View className="flex-1 items-center pt-1">
      <Text className='text-xl p-2 text-gray-500 font-bold'>
        Welcome {user?.username || firstName}
      </Text>
      
      {/* Profile Picture Input */}
      <Text className='text-center p-4 text-red-400 font-bold'>
        Profile Picture
      </Text>
      <TextInput
        value={image}
        onChangeText={ text => setImage(text)}
        className="border border-gray-300 rounded-full p-2 w-3/4"
        placeholder="Enter your profile picture URL"
      />

      {/* First Name Input */}
      <Text className='text-center p-4 text-red-400 font-bold'>
        First Name
      </Text>
      <TextInput
        value={firstName}
        onChangeText={ text => setFirstName(text)}
        className="border border-gray-300 rounded-full p-2 w-3/4"
        placeholder="Enter your first name"
      />

      {/* Last Name Input */}
      <Text className='text-center p-4 text-red-400 font-bold'>
        Last Name
      </Text>
      <TextInput
        value={lastName}
        onChangeText={ text => setLastName(text)}
        className="border border-gray-300 rounded-full p-2 w-3/4"
        placeholder="Enter your last name"
      />

      {/* Major Input */}
      <Text className='text-center p-4 text-red-400 font-bold'>
        Your Major
      </Text>
      <TextInput
        value={major}
        onChangeText={ text => setMajor(text)}
        className="border border-gray-300 rounded-full p-2 w-3/4"
        placeholder="Enter your major at UTA"
      />

      {/* Age Input */}
      <Text className='text-center p-4 text-red-400 font-bold'>
        Your Age
      </Text>
      <TextInput
        value={age}
        onChangeText={ text => setAge(text)}
        className="border border-gray-300 rounded-full p-2 w-3/4"
        placeholder="Enter your age"
      />

      {/* Update Profile Button */}
      <TouchableOpacity
        disabled={incompleteForm}
        onPress={updateUserProfile}
        className={`py-4 px-6 rounded-full w-3/4 justify-center items-center mb-4 ${incompleteForm ? 'bg-gray-300' : 'bg-purple-800'}`}>
        <Text>Update Profile</Text>
      </TouchableOpacity>
    </View>
    </GestureHandlerRootView>
  )
}

export default ModalScreen;
