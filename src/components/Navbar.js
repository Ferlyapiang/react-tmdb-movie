import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pastikan Anda sudah menginstal paket ini

const NavbarView = ({ darkMode }) => (
  <View style={[styles.navbarContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)' }]}>
    <View style={[styles.navbarlogo, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
        <TouchableOpacity style={styles.button}>
            <Ionicons name="search" size={24} color={darkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <Text style={styles.logo}>Cari di TIX ID</Text>
    </View>
    <View style={styles.buttonsContainer} backgroundColor={darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)'}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
            <Ionicons name="person-circle-outline" size={28} color={darkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
            <Ionicons name="notifications-outline" size={28} color={darkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingTop: 40,
  },
  navbarlogo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 1,
    borderRadius: 50,
    flex: 0.8
  },
  logo: {
    fontSize: 18,
    color: 'grey',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 0.3
  },
  button: {
    marginLeft: 10,
    borderRadius: 12,
    padding: 8,
  },
});

export default NavbarView;
