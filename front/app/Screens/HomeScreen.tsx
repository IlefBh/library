import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import dummyBooks from './dummyData'; // Import the dummy data

const HomeScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState<Book[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); 
  const [modalVisible, setModalVisible] = useState(false); 

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]); // Clear results if the query is empty
      return;
    }

    // Flatten all books from all categories into a single array
    const allBooks = Object.values(dummyBooks).flat();

    // Filter books by name (case-insensitive)
    const results = allBooks.filter((book) =>
      book.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results); // Update search results
  };

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle selected category
  };

  // Function to handle book selection
  const handleBookSelect = (book: Book) => {
    setSelectedBook(book); // Set the selected book
    setModalVisible(true); // Show the modal
  };

  // Function to handle booking
  const handleBook = () => {
    console.log('Booked:', selectedBook?.name);
    setModalVisible(false); // Hide the modal
  };

  // Function to handle cancel
  const handleCancel = () => {
    setModalVisible(false); // Hide the modal
  };

  // Get the first book from the "Fiction" category for the "Continue Reading" section
  const continueReadingBook = dummyBooks['Fiction'][0];

  // Get the first two books from the "Self-Help" category for the "Recommendations" section
  const recommendedBooks = dummyBooks['Self-Help'].slice(0, 2);

  // Get books for the selected category
  const categoryBooks = selectedCategory ? dummyBooks[selectedCategory] : [];

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
          <TextInput
            style={styles.searchInput}
            placeholder="Search for book, e-library, or profile"
            value={searchQuery}
            onChangeText={handleSearch} // Update search query as the user types
          />
        </View>
      </View>

      {/* Display Search Results */}
      {searchQuery.trim() !== '' && (
        <View style={styles.searchResults}>
          <Text style={styles.sectionTitle}>Search Results</Text>
          {searchResults.length > 0 ? (
            searchResults.map((book, index) => (
              <TouchableOpacity
                key={index}
                style={styles.bookCard}
                onPress={() => handleBookSelect(book)} // Show modal when book is clicked
              >
                <Image source={book.image} style={styles.bookImage} />
                <View style={styles.bookDetails}>
                  <Text style={styles.bookTitle}>{book.name}</Text>
                  <Text style={styles.bookAuthor}>{book.author}</Text>
                  <Text style={styles.bookDescription} numberOfLines={3}>
                    {book.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>No books found.</Text>
          )}
        </View>
      )}

      {/* Continue Reading Section */}
      {searchQuery.trim() === '' && (
        <>
          <View style={styles.continueReading}>
            <Text style={styles.sectionTitle}>Continue Reading</Text>
            <TouchableOpacity
              style={styles.bookCard}
              onPress={() => handleBookSelect(continueReadingBook)} // Show modal when book is clicked
            >
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
            </TouchableOpacity>
          </View>

          {/* Categories Section */}
          <View style={styles.categories}>
            <Text style={styles.sectionTitle}>Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Object.keys(dummyBooks).map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryItem,
                    selectedCategory === category && styles.selectedCategoryItem, // Highlight selected category
                  ]}
                  onPress={() => handleCategorySelect(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === category && styles.selectedCategoryText, // Highlight selected category text
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Display Books for Selected Category */}
          {selectedCategory && (
            <View style={styles.categoryBooks}>
              <Text style={styles.sectionTitle}>{selectedCategory}</Text>
              {categoryBooks.map((book, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.bookCard}
                  onPress={() => handleBookSelect(book)} // Show modal when book is clicked
                >
                  <Image source={book.image} style={styles.bookImage} />
                  <View style={styles.bookDetails}>
                    <Text style={styles.bookTitle}>{book.name}</Text>
                    <Text style={styles.bookAuthor}>{book.author}</Text>
                    <Text style={styles.bookDescription} numberOfLines={3}>
                      {book.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Recommendations Section */}
          {!selectedCategory && (
            <View style={styles.recommendations}>
              <Text style={styles.sectionTitle}>Recommendation</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recommendedBooks.map((book, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.recommendationCard}
                    onPress={() => handleBookSelect(book)} // Show modal when book is clicked
                  >
                    <Image
                      source={book.image} // Use the image from the dummy data
                      style={styles.recommendationImage}
                    />
                    <Text style={styles.recommendationTitle}>{book.name}</Text>
                    <Text style={styles.recommendationAuthor}>{book.author}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </>
      )}

      {/* Modal for Booking Confirmation */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Book this book?</Text>
            <Text style={styles.modalText}>
              Do you want to book <Text style={styles.boldText}>{selectedBook?.name}</Text> by{' '}
              <Text style={styles.boldText}>{selectedBook?.author}</Text>?
            </Text>
            <View style={styles.modalButtons}>
              <Button  title="Book" onPress={handleBook} />
              <Button  title="Cancel" onPress={handleCancel} />
            </View>
          </View>
        </View>
      </Modal>
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
  searchResults: {
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
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
    marginBottom: 10,
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
  selectedCategoryItem: {
    backgroundColor: '#5F1C1C', // Highlight background for selected category
  },
  categoryText: {
    fontSize: 14,
    color: '#5F1C1C',
  },
  selectedCategoryText: {
    color: 'white', // Highlight text color for selected category
  },
  categoryBooks: {
    padding: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#1C1C8F',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color:'#5F1C5F',

  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default HomeScreen;