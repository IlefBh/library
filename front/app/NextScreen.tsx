import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/ilustration.png')} style={styles.welcomeImage} />
            <Text style={styles.title}>Enjoy the World of Reading and Sharing Together</Text>
            <Text style={styles.subtitle}>Discover thousands of books and meet your book bestie!</Text>

      {/* Use Link to go back to the Welcome Screen */}
      <Link href="/NextNextScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go back</Text>
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
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
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
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default NextScreen;