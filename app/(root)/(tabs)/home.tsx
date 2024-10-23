import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY_DATA = [
  {
    firstName: "Xavier",
    lastName: "Rudd",
    occupation: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/24712956?v=4",
    age: 27,
    id: 1,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Software Developer",
    photoURL: "https://www.biography.com/.image/ar_1:1,c_fill,cs_srgb,progressive,q_auto:good,w_1200/MTc5OTkzODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: 40,
    id: 2,
  },
  {
    firstName: "Sonny",
    lastName: "Sangha",
    occupation: "Software Developer",
    photoURL: "https://www.biography.com/.image/ar_1:1,c_fill,cs_srgb,progressive,q_auto:good,w_1200/MTc5OTkzODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: 21,
    id: 3,
  },
];


export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const swipeRef = useRef(null);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Sign out failed: ", err);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <SignedIn>
      
      {/* card */}
        <View className="flex-1 -mt-6">
          <Swiper
            ref={swipeRef}
            containerStyle={{ backgroundColor: 'transparent' }}
            cards={DUMMY_DATA}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            onSwipedLeft={() => console.log('Swiped PASS')}
            onSwipedRight={() => console.log('Swiped MATCH')}
            overlayLabels={{
              left: {
              title: 'NOPE',
              style: {
              label: {
                textAlign: 'right',
                color: "red",
              }
            }
          },
            right: {
              title: 'MATCH',
              style: {
              label: {
                textAlign: 'left',
                color: "green",
              }
            }
          },
        }}
        renderCard={(card) => (
          <View key={card.id} className="relative bg-white h-3/4 rounded-xl">
            <Image
              className="absolute top-0 h-full w-full rounded-xl"
              source={{ uri: card.photoURL }}
            />
            <View
              className="absolute bottom-0 bg-white w-full justify-between items-between p-4"
              style={styles.cardShadow}
            >
              <Text className="text-lg font-bold">
                {card.firstName} {card.lastName}
              </Text>
              <Text>{card.occupation}</Text>
              <Text>{card.age} years</Text>
            </View>
          </View>
        )}
      />
      </View>

      <View className="flex flex-row justify-evenly">
        <TouchableOpacity className="items-center justify-center rounded-full w-16 h-16 bg-red-200">
          <Entypo name="cross" size={24} color="red"/>

        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center rounded-full w-16 h-16 bg-green-200 ">
          <Entypo name="heart" size={24} color="green"/>

        </TouchableOpacity>


      </View>






        {/* <Text>Hello {user?.emailAddresses[0].emailAddress}</Text> */}
        <TouchableOpacity onPress={handleSignOut} style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Sign Out</Text>
        </TouchableOpacity>
      </SignedIn>

      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
