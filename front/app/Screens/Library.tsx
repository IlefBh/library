import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Button } from 'react-native';
import dummyBooks from './dummyData'; // Import the dummy data

// Define the type for the active tab
type TabKey = 'Available' | 'Booked';

// Define the type for a book
type Book = {
  id: number;
  image: any; // Use `require` for local images
  title: string;
  author: string;
  duration: string;
  isAvailable: boolean; // Add isAvailable to the Book type
};

// Transform dummyBooks into the structure expected by the Library component
const transformDummyBooks = (dummyBooks: any): Record<TabKey, Book[]> => {
  const availableBooks: Book[] = [];
  const bookedBooks: Book[] = [];

  // Flatten all books from all categories into a single array
  const allBooks = Object.values(dummyBooks).flat();

  // Assign books to the appropriate tab based on availability
  allBooks.forEach((book, index) => {
    const transformedBook: Book = {
      id: index + 1, // Generate a unique ID
      image: book.image, // Use the image from dummy data
      title: book.name, // Map `name` to `title`
      author: book.author, // Use the author from dummy data
      duration: '3 days', // Default duration (you can customize this)
      isAvailable: book.isAvailable, // Add isAvailable from dummy data
    };

    if (book.isAvailable) {
      availableBooks.push(transformedBook);
    } else {
      bookedBooks.push(transformedBook); // Add to bookedBooks if not available
    }
  });

  return {
    Available: availableBooks,
    Booked: bookedBooks,
  };
};

// Transform the dummyBooks data
const booksData = transformDummyBooks(dummyBooks);

const Library = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Available'); // Explicitly type `activeTab`
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // State to store the selected book
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle book selection
  const handleBookSelect = (book: Book) => {
    setSelectedBook(book); // Set the selected book
    setModalVisible(true); // Show the modal
  };

  // Function to handle booking
  const handleBook = () => {
    console.log('Booked:', selectedBook?.title);
    setModalVisible(false); // Hide the modal
  };

  // Function to handle cancel
  const handleCancel = () => {
    setModalVisible(false); // Hide the modal
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <View style={styles.tabs}>
          {(['Available', 'Booked'] as TabKey[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Books Section */}
      <ScrollView style={styles.booksSection}>
        <Text style={styles.sectionTitle}>
          {activeTab === 'Available'
            ? `${booksData.Available.length} Books`
            : `${booksData.Booked.length} Books`}
        </Text>
        <View style={styles.booksGrid}>
          {booksData[activeTab].map((book) => (
            <TouchableOpacity
              key={book.id}
              style={styles.bookCard}
              onPress={() => handleBookSelect(book)} // Show modal when book is clicked
            >
              <Image source={book.image} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
              <Text style={styles.bookDuration}>{book.duration}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal for Booking Confirmation */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedBook?.isAvailable ? (
              <>
                <Text style={styles.modalTitle}>Book this book?</Text>
                <Text style={styles.modalText}>
                  Do you want to book <Text style={styles.boldText}>{selectedBook?.title}</Text> by{' '}
                  <Text style={styles.boldText}>{selectedBook?.author}</Text>?
                </Text>
                <View style={styles.modalButtons}>
                  <Button title="Book" onPress={handleBook} />
                  <Button title="Cancel" onPress={handleCancel} />
                </View>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Book Unavailable</Text>
                <Text style={styles.modalText}>
                  Sorry, <Text style={styles.boldText}>{selectedBook?.title}</Text> by{' '}
                  <Text style={styles.boldText}>{selectedBook?.author}</Text> is already booked.
                </Text>
                <Button title="OK" onPress={handleCancel} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#1C3F5F',
    color:'white',

  },
  activeTab: {
    backgroundColor: '#1C1C8F',
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
  },
  activeTabText: {
    color: '#fff',
  },
  booksSection: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  booksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookCard: {
    width: '48%',
    marginBottom: 15,
  },
  bookImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
  },
  bookDuration: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
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

export default Library;