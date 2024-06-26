import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import useMovieData from '../config/config';
import MovieModal from './MovieModal';

const { width } = Dimensions.get('window');

const BannerView = ({ darkMode }) => {
  const scrollViewRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const data = useMovieData();

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (currentItemIndex < data.length - 1) {
        scrollViewRef.current.scrollTo({ x: (currentItemIndex + 1) * width, animated: true });
        setCurrentItemIndex(currentItemIndex + 1);
      } else {
        scrollViewRef.current.scrollTo({ x: 0, animated: true });
        setCurrentItemIndex(0);
      }
    }, 5000); 
    return () => clearInterval(scrollInterval);
  }, [currentItemIndex, data.length]);

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentItemIndex(newIndex);
  };

  const handleImagePress = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <View style={[styles.bannerContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {data.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => handleImagePress(item)}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
              style={styles.bannerImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((item, index) => (
          <View key={index} style={[styles.indicator, { backgroundColor: index === currentItemIndex ? 'white' : 'gray' }]} />
        ))}
      </View>

      {/* Gunakan komponen MovieModal */}
      <MovieModal showModal={showModal} setShowModal={setShowModal} selectedMovie={selectedMovie} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    paddingVertical: 10,
    position: 'relative',
  },
  bannerImage: {
    width: width,
    resizeMode: 'stretch',
    aspectRatio: 16/9,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default BannerView;
