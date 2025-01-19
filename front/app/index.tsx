import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/ilustration.png')} style={styles.welcomeImage} />
      <Text style={styles.title}>Enjoy the World of Reading and Sharing Together</Text>
      <Text style={styles.subtitle}>Discover thousands of books and meet your book bestie!</Text>

      {/* Use Link for navigation */}
      <Link href="./Screens/NextScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </Link>

     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1C1C5F',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  communityText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  communitySubtext: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default WelcomeScreen;