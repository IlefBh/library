import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Anastasha</Text>
        <Text style={styles.profileSubtitle}>Bookworm by day, dreamer by night</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>21</Text>
            <Text style={styles.statLabel}>Reads</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>300</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Read 9 more books to maintain your level before 12.12.2024</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Saved</Text>
        </TouchableOpacity>
      </View>

      {/* Books Section */}
      <View style={styles.booksContainer}>
        <Text style={styles.sectionTitle}>Saved Books</Text>
        <View style={styles.booksGrid}>
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>The Art of War</Text>
            <Text style={styles.bookAuthor}>Sun Tzu</Text>
          </View>
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>FILOSOFI TERAS</Text>
            <Text style={styles.bookAuthor}>Henry Manampiring</Text>
          </View>
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>A Lovely T...</Text>
            <Text style={styles.bookAuthor}>Katimatu Jane</Text>
          </View>
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>Love</Text>
            <Text style={styles.bookAuthor}>Ade Aprilia</Text>
          </View>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
  },
  actionButton: {
    backgroundColor: '#1C1C5F',
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  progressContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabButton: {
    padding: 10,
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  booksContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  booksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProfilePage;
