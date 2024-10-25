// import React from 'react';
// import { useNavigation, useRoute } from '@react-navigation/core';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp } from '@react-navigation/native';

// // Define the types for the navigation and route params
// type Params = {
//   loggedInProfile: {
//     displayName: string;
//     photoURL: string;
//   };
//   userSwiped: {
//     displayName: string;
//     photoURL: string;
//   };
// };

// type MatchScreenRouteProp = RouteProp<{ params: Params }, 'params'>;
// type MatchScreenNavigationProp = NativeStackNavigationProp<any>;

// // Define the component
// const MatchedScreen: React.FC = () => {
//   const navigation = useNavigation<MatchScreenNavigationProp>();
//   const { params } = useRoute<MatchScreenRouteProp>();

//   const { loggedInProfile, userSwiped } = params;

//   return (
//     <View className="h-full bg-red-500 pt-20" style={{ opacity: 0.89 }}>
//       <View className="justify-center px-10 pt-20">
//         <Image source={{ uri: "https://links.papareact.com/mg9" }} />
//       </View>

//       <Text className="text-white text-center mt-5">
//         You and {userSwiped.displayName} have liked each other.
//       </Text>

//       <View className="flex-row justify-evenly mt-5">
//         <Image
//           className="h-32 w-32 rounded-full"
//           source={{ uri: loggedInProfile.photoURL }}
//         />
//         <Image
//           className="h-32 w-32 rounded-full"
//           source={{ uri: userSwiped.photoURL }}
//         />
//       </View>

//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         className="bg-white m-5 px-10 py-5 rounded-full"
//         redirect = {"/app/(roots)/(tabs)/chat"}
//       >
//         <Text className="text-center text-red-500 text-lg">Send a Message</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default MatchedScreen;
