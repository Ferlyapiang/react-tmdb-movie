import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import NavbarView from './src/components/Navbar';
import LocationView from './src/components/Location';
import BannerView from './src/components/Banner';
import MiddleView from './src/components/Middle';
import BuyTiketView from './src/components/BuyTiket';

export default function App() {
  return (
    <View style={styles.container}>
      <NavbarView/>
      <ScrollView>
        <LocationView/>
        <BannerView/>
        <MiddleView/>
        <BuyTiketView/>        
        <View style={styles.contentContainer}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
