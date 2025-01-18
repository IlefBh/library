import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

// Define the type for the active tab
type TabKey = 'Available' | 'Waiting' | 'History';

// Define the type for a book
type Book = {
  id: number;
  image: any; // Use `require` for local images
  title: string;
  author: string;
  duration: string;
};

// Sample data for books
const booksData: Record<TabKey, Book[]> = {
  Available: [
    {
      id: 1,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'The Art of War',
      author: 'Sun Tzu',
      duration: '3 days',
    },
    {
      id: 2,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'FILOSOFI TERAS',
      author: 'Henry Manampling',
      duration: '5 days',
    },
    {
      id: 3,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'The Grilled Belief',
      author: 'Agatha Christie',
      duration: '3 days',
    },
  ],
  Waiting: [
    {
      id: 4,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'To Love',
      author: 'Karinatul Jan',
      duration: '3 days',
    },
  ],
  History: [
    {
      id: 5,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'A Lovely Tale',
      author: 'Yoon Hong',
      duration: '3 days',
    },
    {
      id: 6,
      image: require('../assets/images/file.png'), // Replace with your image path
      title: 'How to Love',
      author: 'Kamal Ravikant',
      duration: '3 days',
    },
  ],
};

const Library = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Available'); // Explicitly type `activeTab`

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <View style={styles.tabs}>
          {(['Available', 'Waiting', 'History'] as TabKey[]).map((tab) => (
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
            ? '6 Books'
            : activeTab === 'Waiting'
            ? '1 Book'
            : '1 Book'}
        </Text>
        <View style={styles.booksGrid}>
          {booksData[activeTab].map((book) => (
            <View key={book.id} style={styles.bookCard}>
              <Image source={book.image} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>{book.author}</Text>
              <Text style={styles.bookDuration}>{book.duration}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

     
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
  },
  activeTab: {
    backgroundColor: '#007BFF',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Library;