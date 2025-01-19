import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import dummyBooks from './dummyData'; // Import the dummy data

const HomeScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  // Get the first book from the "Fiction" category for the "Continue Reading" section
  const continueReadingBook = dummyBooks['Fiction'][0];

  // Get the first two books from the "Self-Help" category for the "Recommendations" section
  const recommendedBooks = dummyBooks['Self-Help'].slice(0, 2);

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
          <TouchableOpacity onPress={() => router.push('/Screens/SearchScreen')}>
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
            source={continueReadingBook.image} // Use the image from the dummy data
            style={styles.bookImage}
          />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{continueReadingBook.name}</Text>
            <Text style={styles.bookAuthor}>{continueReadingBook.author}</Text>
            <Text style={styles.bookDescription} numberOfLines={3}>
              {continueReadingBook.description}
            </Text>
          </View>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.keys(dummyBooks).map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recommendations Section */}
      <View style={styles.recommendations}>
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recommendedBooks.map((book, index) => (
            <View key={index} style={styles.recommendationCard}>
              <Image
                source={book.image} // Use the image from the dummy data
                style={styles.recommendationImage}
              />
              <Text style={styles.recommendationTitle}>{book.name}</Text>
              <Text style={styles.recommendationAuthor}>{book.author}</Text>
            </View>
          ))}
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