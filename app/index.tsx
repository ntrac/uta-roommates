import { Redirect } from 'expo-router';

export default function HomeScreen() {
  // Redirect to the tabs route
  return <Redirect href="/(tabs)" />;
  return <Redirect href="/(tabs)/about" />;
}