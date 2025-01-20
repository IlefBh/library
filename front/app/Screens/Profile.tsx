import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define the type for a book
type Book = {
  id: number;
  image: any; // Use `require` for local images
  title: string;
  author: string;
  isSaved: boolean;
  isBooked: boolean;
};

// Fake data for books (8 books)
const fakeBooks: Book[] = [
  {
    id: 1,
    image: require('../../assets/images/bookCover1.png'), // Replace with your image path
    title: 'FILOSOFI TERAS',
    author: 'Henry Manampling',
    isSaved: true,
    isBooked: false,
  },
  {
    id: 2,
    image: require('../../assets/images/bookCover2.png'), // Replace with your image path
    title: 'The Art of War',
    author: 'Sun Tzu',
    isSaved: false,
    isBooked: true,
  },
  {
    id: 3,
    image: require('../../assets/images/bookCover3.png'), // Replace with your image path
    title: 'How to Love',
    author: 'Kamal Ravikant',
    isSaved: true,
    isBooked: false,
  },
  {
    id: 4,
    image: require('../../assets/images/bookCover4.png'), // Replace with your image path
    title: 'A Lovely Tale',
    author: 'Yoon Hong',
    isSaved: false,
    isBooked: true,
  },
  {
    id: 5,
    image: require('../../assets/images/bookCover5.png'), // Replace with your image path
    title: 'Atomic Habits',
    author: 'James Clear',
    isSaved: true,
    isBooked: false,
  },
  {
    id: 6,
    image: require('../../assets/images/bookCover6.png'), // Replace with your image path
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    isSaved: false,
    isBooked: true,
  },
  {
    id: 7,
    image: require('../../assets/images/bookCover2.png'), // Replace with your image path
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isSaved: true,
    isBooked: false,
  },
  {
    id: 8,
    image: require('../../assets/images/bookCover6.png'), // Replace with your image path
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isSaved: false,
    isBooked: true,
  },
];

// Fake data for profile
const profileData = {
  name: 'Anastasia',
  photo: require('../../assets/images/profile.jpg'), // Replace with your image path
  booked: 120,
  saved: 360,
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'Saved' | 'Booked'>('Saved'); // State for active tab
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // State for selected book
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const navigation = useNavigation(); // Navigation hook

  // Filter books based on the active tab
  const filteredBooks = fakeBooks.filter((book) =>
    activeTab === 'Saved' ? book.isSaved : book.isBooked
  );

  // Handle book selection
  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  // Handle booking a book
  const handleBook = () => {
    if (selectedBook) {
      // Update the book's status to booked
      selectedBook.isBooked = true;
      selectedBook.isSaved = false;
      setModalVisible(false);
    }
  };

  // Handle canceling a booking
  const handleCancelBooking = () => {
    if (selectedBook) {
      // Update the book's status to saved
      selectedBook.isBooked = false;
      selectedBook.isSaved = true;
      setModalVisible(false);
    }
  };

  // Handle adding a review
  const handleAddReview = () => {
    setModalVisible(false);
    navigation.navigate('Review', { book: selectedBook }); // Navigate to the review page
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={profileData.photo} style={styles.profilePhoto} />
        <Text style={styles.name}>{profileData.name}</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.booked}</Text>
            <Text style={styles.statLabel}>Booked</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profileData.saved}</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
        </View>
      </View>

      {/* Tabs for Saved and Booked Books */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Saved' && styles.activeTab]}
          onPress={() => setActiveTab('Saved')}
        >
          <Text style={[styles.tabText, activeTab === 'Saved' && styles.activeTabText]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Booked' && styles.activeTab]}
          onPress={() => setActiveTab('Booked')}
        >
          <Text style={[styles.tabText, activeTab === 'Booked' && styles.activeTabText]}>Booked</Text>
        </TouchableOpacity>
      </View>

      {/* Books Section */}
      <View style={styles.booksSection}>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          {filteredBooks.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={styles.bookCard}
              onPress={() => handleBookSelect(book)}
            >
              <Image source={book.image} style={styles.bookImage} />
              <View>
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Modal for Book Actions */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedBook && (
              <>
                <Text style={styles.modalTitle}>
                  {activeTab === 'Saved' ? 'Book this book?' : 'Booked Book Options'}
                </Text>
                <Text style={styles.modalText}>
                  {activeTab === 'Saved'
                    ? `Do you want to book "${selectedBook.title}" by ${selectedBook.author}?`
                    : `What would you like to do with "${selectedBook.title}"?`}
                </Text>
                {activeTab === 'Saved' ? (
                  <View style={styles.modalButtons}>
                    <Button title="Book" onPress={handleBook} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                  </View>
                ) : (
                  <View style={styles.modalButtons}>
                    <Button title="Cancel Booking" onPress={handleCancelBooking} />
                    <Button title="Add Review" onPress={handleAddReview} />
                  </View>
                )}
              </>
            )}
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1C1C5F',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#1C1C5F',
    fontWeight: 'bold',
  },
  booksSection: {
    padding: 20,
  },
  bookCard: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
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
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Profile;