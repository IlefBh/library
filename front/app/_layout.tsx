import { Stack, useSegments } from 'expo-router';
import Loader from './Screens/loader';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import BottomNav from './Screens/Components/BottomNav';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const segments = useSegments();

  // Use a fallback value (empty string) if segments[1] is undefined
  const showBottomNav = ['HomeScreen', 'Library', 'Profile', 'SearchScreen'].includes(segments[1] || '');

  console.log('Current segments:', segments); // Debug log
  console.log('Show BottomNav:', showBottomNav); // Debug log

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen
          name="Screens/HomeScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens/Library"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens/Profile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens/SearchScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens/Signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screens/Signup"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* Conditionally render the BottomNav */}
      {showBottomNav && <BottomNav />}
    </View>
  );
}