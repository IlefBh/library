import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useSegments, useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const BottomNav = () => {
  const segments = useSegments(); // Get the current route segments
  const activeSegment= segments[1]; // Use the second segment
  const router = useRouter();

  console.log('Active Segment:', activeSegment); // Debug log

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear user session, navigate to login page)
    console.log('User logged out');
    router.push('/Screens/Signin'); // Navigate to the sign-in page after logout
  };

  return (
    <View style={styles.bottomNav}>
      <Link href="/Screens/HomeScreen" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Text
            style={[
              styles.navText,
              activeSegment === 'HomeScreen' && styles.activeNavText, // Apply active style
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Screens/Library" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Text
            style={[
              styles.navText,
              activeSegment === 'Library' && styles.activeNavText, // Apply active style
            ]}
          >
            Library
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Screens/Profile" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Text
            style={[
              styles.navText,
              activeSegment === 'Profile' && styles.activeNavText, // Apply active style
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity style={styles.navItem} onPress={handleLogout}>
        <AntDesign name="logout" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
  activeNavText: {
    color: '#1C1C5F', // Highlight color for the active tab
    fontWeight: 'bold', // Optional: Make the active tab text bold
  },
});

export default BottomNav;