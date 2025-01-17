// Home.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Home = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('DetailsScreen'); // Make sure this matches the name in your stack navigator
    }, 8000);

    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/file.png')}
        style={styles.logo} />
      <Text style={styles.subtitle}>Readify</Text>
      <Text style={styles.description}>Your Gateway to Infinite Stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 50,
    marginTop: 10,
    fontFamily: 'Poppins',
    color: '#1C1C5C'
  },
  description: {
    fontSize: 16,
  },
  logo:{
    width: 360,
    height: 360,
    resizeMode: 'contain',
  }
});

export default Home;
