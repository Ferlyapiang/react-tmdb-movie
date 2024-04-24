import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MiddleView = ({ darkMode }) => {
  const [itemStatus, setItemStatus] = useState([
    { key: 'Semua Film', pressed: false },
    { key: 'XXI', pressed: false },
    { key: 'CGV', pressed: false },
    { key: 'Watchlist Saya', icon: 'heart-outline', pressed: false },
  ]);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.middleTextCircle,
        { borderColor: item.pressed ? 'blue' : 'grey' },
        { color: item.pressed ? 'blue' : (darkMode ? 'white' : 'black') }
      ]}
      onPress={() => {
        const updatedStatus = [...itemStatus];
        updatedStatus[index].pressed = !updatedStatus[index].pressed;
        setItemStatus(updatedStatus);
      }}
    >
      {item.icon && (
        <Ionicons
          name={item.icon}
          style={{ marginRight: 5 }}
          size={18}
          color={darkMode ? 'white' : 'black'}
        />
      )}
      <Text style={{ color: item.pressed ? 'blue' : (darkMode ? 'white' : 'black') }}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.middleContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)' }]}>
      <View style={styles.middleRow}>
        <Text style={styles.middleTextLeft}>Sedang Tayang</Text>
        <View style={styles.middleRowRight}>
          <Text style={styles.middleText}>Semua</Text>
          <Ionicons name="chevron-forward-circle" size={24} color={darkMode ? 'white' : 'black'} />
        </View>
      </View>
      <FlatList
        data={itemStatus}
        renderItem={({ item, index }) => renderItem({ item, index, darkMode })}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.flatListContainer}
      />

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
    marginBottom: 20,
  },
  flatListContainer: {
    flexDirection: 'row',
    padding: 5
  },
});

export default MiddleView;
