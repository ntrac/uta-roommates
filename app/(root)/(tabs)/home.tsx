import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Entypo } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDoc, doc } from "firebase/firestore";
import { db } from '@/firebaseConfig';
import ModalScreen from "@/components/ModalScreen";


const DUMMY_DATA = [
  {
    firstName: "Xavier",
    lastName: "Rudd",
    occupation: "Software Developer",
    photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&psig=AOvVaw2xVFHfhCbNnXNCCdu3KRPf&ust=1729749694500000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjtyfLpo4kDFQAAAAAdAAAAABAE",
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
    firstName: "Bruce",
    lastName: "Wayne",
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
  const [profiles, setProfiles] = useState([]);

  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    // Check if user exists in Firebase Firestore
    const checkUserInDatabase = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.id);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // If user does not exist, show the ModalScreen
          setIsProfileComplete(false);
        } else {
          // If user exists, proceed as normal
          setIsProfileComplete(true);
        }
      }
    };

    checkUserInDatabase();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Sign out failed: ", err);
    }
  };

  if (!isProfileComplete) {
    return <ModalScreen />;
  }

  return (
    <SafeAreaView className="flex-1">
      <SignedIn>
      ß
      {/* card */}
        <View className="flex-1 -mt-6">
          <Swiper
            ref={swipeRef}
            containerStyle={{ backgroundColor: 'transparent' }}
            cards={DUMMY_DATA} //Change it to profiles later
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
        renderCard={(card) => card ? (
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
        ) : (
          <View className= "relative bg-white h-3/4 rounded-xl justify-center items-center" style={styles.cardShadow}>
            <Text className="font-bold pb-5">No more profiles</Text>
            <Image
              className="h-20 w-full"
              height={100}
              width={100}
              source={{ uri: "https://links.papareact.com/6gb" }}
            />
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
