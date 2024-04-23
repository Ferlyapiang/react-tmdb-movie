import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MiddleView = ({ darkMode }) => {
  const [isWatchlistPressed, setIsWatchlistPressed] = useState(false);

  return (
    <View style={[styles.middleContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)' }]}>
      <View style={styles.middleRow}>
        <Text style={styles.middleTextLeft}>Sedang Tayang</Text>
        <View style={styles.middleRowRight}>
          <Text style={styles.middleText}>Semua</Text>
          <Ionicons name="chevron-forward-circle" size={24} color={darkMode ? 'white' : 'black'} />
        </View>
      </View>
      
      <View style={styles.middleRow}>
      <TouchableOpacity
          style={[
            styles.middleTextCircle,
            { borderColor: isWatchlistPressed ? 'red' : 'blue' },
          ]}
          onPress={() => setIsWatchlistPressed(!isWatchlistPressed)}
        >
        <Text>Semua Film</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.middleTextCircle,
            { borderColor: isWatchlistPressed ? 'red' : 'blue' },
          ]}
          onPress={() => setIsWatchlistPressed(!isWatchlistPressed)}
        >
        <Text>XXI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.middleTextCircle,
            { borderColor: isWatchlistPressed ? 'red' : 'blue' },
          ]}
          onPress={() => setIsWatchlistPressed(!isWatchlistPressed)}
        >
        <Text>CGV</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.middleTextCircle,
            { borderColor: isWatchlistPressed ? 'red' : 'blue' },
          ]}
          onPress={() => setIsWatchlistPressed(!isWatchlistPressed)}
        >
          <Ionicons
            name="heart-outline"
            style={{ marginRight: 5 }}
            size={18}
            color={darkMode ? 'white' : 'black'}
          />
          <Text>Watchlist Saya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middleContainer: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  middleRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleText: {
    fontSize: 18,
    color: 'grey',
    marginRight: 10,
  },
  middleTextLeft: {
    fontSize: 18,
    color: 'grey',
    flex: 1,
    fontWeight: 'bold',
  },
  middleTextCircle: {
    flexDirection: 'row',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
});

export default MiddleView;
