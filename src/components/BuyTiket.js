import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';

const { width } = Dimensions.get('window');
const data = [
    { id: '1', image: 'https://asset.tix.id/wp-content/uploads/2024/04/9944e604-c9f3-461a-8798-9a7899012f88-1299x1200.jpeg' },
    { id: '2', image: 'https://asset.tix.id/wp-content/uploads/2024/04/8899821d-39ec-4529-a964-d067c08e2ce4.webp' },
    { id: '3', image: 'https://asset.tix.id/wp-content/uploads/2024/04/33846905-9d17-411d-8c48-9d14222ea6c5.webp' },
];

const BuyTiketView = ({ darkMode }) => {

  return (
    <View style={[styles.buyTiketContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {data.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => console.log('Item pressed')}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
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
