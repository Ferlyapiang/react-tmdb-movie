import React, { useState } from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const data = [
    { id: '1', image: 'https://asset.tix.id/wp-content/uploads/2024/04/9944e604-c9f3-461a-8798-9a7899012f88-1299x1200.jpeg' },
    { id: '2', image: 'https://asset.tix.id/wp-content/uploads/2024/04/8899821d-39ec-4529-a964-d067c08e2ce4.webp' },
    { id: '3', image: 'https://asset.tix.id/wp-content/uploads/2024/04/33846905-9d17-411d-8c48-9d14222ea6c5.webp' },
];

const BannerView = ({ darkMode }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentItemIndex(viewableItems[0].index);
    }
  };

  const renderItem = ({ item, _ }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.image }}
        style={styles.bannerImage}
      />
    </View>
  );

  return (
    <View style={[styles.bannerContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
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
  item: {
    width: width,
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
