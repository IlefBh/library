import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome1.png')} style={styles.logo} />
      <Text style={styles.title}>Enjoy the World of Reading and Sharing Together</Text>
      <Text style={styles.subtitle}>Discover thousands of books and meet your book bestie!</Text>
      <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('Community')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#515151',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#515151',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonNext: {
    borderRadius: 16, // Use numbers instead of strings for borderRadius
    backgroundColor: '#1C1C5F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;