import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LocationView = ({ darkMode }) => (
  <View style={[styles.locationContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
    <Ionicons style={styles.icon} name="location-sharp" size={28} color={darkMode ? 'white' : 'black'} />
    <Text style={styles.locationText}>Karawang</Text>
    <Ionicons name="chevron-down-outline" style={styles.icon} size={28} color={darkMode ? 'white' : 'black'} />
  </View>
);

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'grey',
    flex: 0.9,
  },
  icon: {
    backgroundColor: 'transparent',
    marginLeft: 10,
    flex: 0.1
  },
});

export default LocationView;
