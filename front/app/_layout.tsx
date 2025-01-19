import { Stack, useSegments } from 'expo-router';
import Loader from './Screens/loader';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import BottomNav from './Screens/Components/BottomNav';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const segments = useSegments();
  const showBottomNav = ['HomeScreen', 'Library', 'Profile', 'SearchScreen'].includes(segments[0]);

  // Debug: Log the current segments
  console.log('Current segments:', segments);

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
          name="index" // This corresponds to the file `app/index.tsx`
          options={{
            headerShown: false, // Hide the header for the welcome screen
          }}
        />
        <Stack.Screen
          name="NextScreen" // This corresponds to the file `app/NextScreen.tsx`
          options={{
            headerShown: false, // Set a title for the next screen
          }}
        />
        <Stack.Screen
          name="NextNextScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Search" options={{ headerShown: false }} />
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Library"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
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