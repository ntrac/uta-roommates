import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to UTA Roommates</Text>
        <Text style={styles.subtitle}>Find your perfect roommate at UTA</Text>
      </View>
      
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Roommates</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.card}> 
              <View style={styles.cardImageContainer}>
                <View style={styles.cardImagePlaceholder}>
                  <Ionicons name="person" size={40} color="#4CAF50" />
                </View>
              </View>
              <Text style={styles.cardTitle}>Roommate {item}</Text>
              <Text style={styles.cardSubtitle}>Computer Science</Text>
              <Text style={styles.cardText}>Looking for a roommate for Fall 2023</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="search" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Find Roommates</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="create" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Create Profile</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        <View style={styles.infoItem}>
          <Ionicons name="person-add" size={24} color="#4CAF50" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Create Your Profile</Text>
            <Text style={styles.infoText}>Tell us about yourself and your preferences</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="search" size={24} color="#4CAF50" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Find Matches</Text>
            <Text style={styles.infoText}>Browse through potential roommates</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="chatbubbles" size={24} color="#4CAF50" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Connect</Text>
            <Text style={styles.infoText}>Message and meet your potential roommates</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    color: '#999',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoSection: {
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
});
