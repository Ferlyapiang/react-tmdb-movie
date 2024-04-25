import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
import useMovieData from '../config/config';

const { width } = Dimensions.get('window');

const BuyTiketView = ({ darkMode }) => {
  const movies = useMovieData();

  return (
    <View style={[styles.buyTiketContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {movies.map((movie) => (
          <TouchableOpacity key={movie.id} onPress={() => console.log('Movie pressed')}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.buyTiketImage}
              />
              <Text style={styles.buyTiketText}>BELI TIKET</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buyTiketContainer: {
    paddingBottom: 50,
    position: 'relative',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
  },
  buyTiketImage: {
    width: width * 0.6,
    height: 350,
    resizeMode: 'cover',
  },
  buyTiketText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(17, 30, 96, 1)',
    color: 'gold',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default BuyTiketView;
