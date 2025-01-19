import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import {useRouter} from 'expo-router';

const HomeScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 60 }}>
          <View>
            <Text style={styles.greeting}>Hi, Anastasha</Text>
            <Text style={styles.subGreeting}>Let's read a book today</Text>
          </View>
        </View>
        <View style={styles.searchBar}>
        <TouchableOpacity onPress={() =>router.push('/SearchScreen')}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for book, e-library, or profile"
              editable={false} // Make the input non-editable
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Reading Section */}
      <View style={styles.continueReading}>
        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <View style={styles.bookCard}>
          <Image
            source={require('../assets/images/bookCover1.png')} // Replace with your image path
            style={styles.bookImage}
          />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>FILOSOFI TERAS</Text>
            <Text style={styles.bookAuthor}>Henry Manampling</Text>
            <Text style={styles.bookDescription} numberOfLines={3}>
              Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi...
            </Text>
          </View>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>See All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Action & Adventure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Business & Economies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Family & Relationship</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Fiction</Text>
          </TouchableOpacity>
         
        </ScrollView>
      </View>

      {/* Recommendations Section */}
      <View style={styles.recommendations}>
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recommendationCard}>
            <Image
              source={require('../assets/images/bookCover2.png')} // Replace with your image path
              style={styles.recommendationImage}
            />
            <Text style={styles.recommendationTitle}>Atomic Habits</Text>
            <Text style={styles.recommendationAuthor}>James Clear</Text>
          </View>
          <View style={styles.recommendationCard}>
            <Image
              source={require('../assets/images/bookCover3.png')} // Replace with your image path
              style={styles.recommendationImage}
            />
            <Text style={styles.recommendationTitle}>The Tipping Point</Text>
            <Text style={styles.recommendationAuthor}>Malcolm Gladwell</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#1C1C5F',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'white',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subGreeting: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  searchBar: {
    marginTop: 15,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  continueReading: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5F5F1C',
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  bookDetails: {
    flex: 1,
    marginLeft: 15,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  bookDescription: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  categories: {
    padding: 20,
  },
  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#5F1C1C',
    
  },
  categoryText: {
    fontSize: 14,
    color: '#5F1C1C',
  },
  recommendations: {
    padding: 20,
  },
  recommendationCard: {
    width: 150,
    marginRight: 15,
  },
  recommendationImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  recommendationAuthor: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;