import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { Icon } from '@rneui/themed';
import { Colors } from '../constants/Colors';

const SearchInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="What are you looking for?"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { /* handle search */ }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    borderRadius: 4
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    width: '100%'
  },
  input: {
    paddingLeft: 10,
    height: 40
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.blue1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SearchInput;
