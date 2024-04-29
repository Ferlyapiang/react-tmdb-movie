import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MovieModal = ({ showModal, setShowModal, selectedMovie }) => {
  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {selectedMovie && (
            <>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}` }}
                style={[styles.modalImage, { height: width * 0.6 }]} // Ubah tinggi gambar menjadi 60% dari lebar layar
              />
              <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
              <Text style={styles.modalOverview}>{selectedMovie.overview}</Text>
            </>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Ubah lebar konten modal menjadi 80% dari lebar layar
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center', // Tengahkan teks judul
  },
  modalOverview: {
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieModal;
