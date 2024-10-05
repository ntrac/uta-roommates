import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Sign out failed: ", err);
    }
  };

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
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
    </View>
  );
}
