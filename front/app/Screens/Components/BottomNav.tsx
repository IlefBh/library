import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useSegments, useRouter } from 'expo-router';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'; // Import icons

const BottomNav = () => {
  const segments = useSegments(); // Get the current route segments
  const activeSegment = segments[1]; // Use the second segment
  const router = useRouter();

  console.log('Active Segment:', activeSegment); // Debug log

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear user session, navigate to login page)
    console.log('User logged out');
    router.push('/Screens/Signin'); // Navigate to the sign-in page after logout
  };

  return (
    <View style={styles.bottomNav}>
      {/* Home */}
      <Link href="/Screens/HomeScreen" asChild>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign
            name="home"
            size={24}
            style={[
              styles.navIcon,
              activeSegment === 'HomeScreen' && styles.activeNavIcon, // Apply active style
            ]}
          />
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

      {/* Library */}
      <Link href="/Screens/Library" asChild>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons
            name="library-books"
            size={24}
            style={[
              styles.navIcon,
              activeSegment === 'Library' && styles.activeNavIcon, // Apply active style
            ]}
          />
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

      {/* Profile */}
      <Link href="/Screens/Profile" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Feather
            name="user"
            size={24}
            style={[
              styles.navIcon,
              activeSegment === 'Profile' && styles.activeNavIcon, // Apply active style
            ]}
          />
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

      {/* Logout */}
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
  navIcon: {
    color: '#333', // Default icon color
  },
  activeNavIcon: {
    color: '#1C1C5F', // Highlight color for the active tab icon
  },
  navText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5, // Add some space between the icon and text
  },
  activeNavText: {
    color: '#1C1C5F', // Highlight color for the active tab text
    fontWeight: 'bold', // Optional: Make the active tab text bold
  },
});

export default BottomNav;