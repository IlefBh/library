import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const NextNextScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/ill.png')} style={styles.welcomeImage} />
            <Text style={styles.title}>Welcome to the Readify Community</Text>
            <Text style={styles.subtitle}>Enhance Your Reading Experience with Social Features on Readify</Text>

      {/* Use Link to go back to the Welcome Screen */}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/Screens/Signin" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's get You Started</Text>
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

export default NextNextScreen;