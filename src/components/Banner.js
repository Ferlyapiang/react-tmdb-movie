import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import useMovieData from '../config/config';

const { width } = Dimensions.get('window');

const BannerView = ({ darkMode }) => {
  const scrollViewRef = useRef(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const data = useMovieData();

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentItemIndex(newIndex);
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
          <Image
            key={item.id}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} // Menggunakan versi gambar dengan resolusi lebih rendah
            style={styles.bannerImage}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {data.map((item, index) => (
          <View key={index} style={[styles.indicator, { backgroundColor: index === currentItemIndex ? 'white' : 'gray' }]} />
        ))}
      </View>
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
    height: 200,
    resizeMode: 'cover',
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
