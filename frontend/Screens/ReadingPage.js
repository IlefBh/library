import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ReadingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/welcome3.png')}
        style={styles.logo}
        onError={() => console.log('Image failed to load')}
      />
      <Text style={styles.title}>Readify With us</Text>
      <Text style={styles.subtitle}>Read Anytime, Connect Anywhere with Readify</Text>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.navigate('Profile')}
        accessibilityLabel="Go Back"
        accessibilityHint="Navigates to the previous screen"
      >
        <Text style={styles.buttonText}>Let's get you started</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  buttonBack: {
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    border: '5px solid #1C1C5F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1C1C5F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReadingPage;
