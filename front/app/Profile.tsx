import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Anastasia</Text>
        <Text style={styles.age}>21</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Roads</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>360</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.bioTitle}>Bella Anastasia</Text>
        <Text style={styles.bioText}>Discovering big dog, distance by night</Text>
      </View>

      {/* Call to Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Call profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Books Section */}
      <View style={styles.booksSection}>
        <Text style={styles.sectionTitle}>Saved</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.bookCard}>
            
        
            <Text style={styles.bookTitle}>FILOSOFI TERAS</Text>
            <Text style={styles.bookAuthor}>Henry Manampling</Text>
          </View>
          <View style={styles.bookCard}>
            
            <Text style={styles.bookTitle}>The Art of War</Text>
            <Text style={styles.bookAuthor}>Sun Tzu</Text>
          </View>
          <View style={styles.bookCard}>
            
            <Text style={styles.bookTitle}>How to Love</Text>
            <Text style={styles.bookAuthor}>Kamal Ravikant</Text>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
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
  bioSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bioText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  booksSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookCard: {
    width: 150,
    marginRight: 15,
  },
  bookImage: {
    width: 150,
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

export default Profile;