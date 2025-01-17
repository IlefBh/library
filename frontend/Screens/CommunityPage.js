import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CommunityPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome2.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to the Readify Community</Text>
      <Text style={styles.subtitle}>Enhance Your Reading Experience with Social Features on Readify</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNext} onPress={() => navigation.navigate('Reading')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
        
      </View>
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
    marginBottom: 20,
    color: '#515151',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '60%', 
  },
  buttonNext: {
    borderRadius: 16, 
    backgroundColor: '#1C1C5F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    borderRadius: 16, 
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

export default CommunityPage;