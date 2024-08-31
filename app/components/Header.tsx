import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Typography } from '../constants/styles/typography';
import SearchInput from './SearchInput';

const Header = () => {

  return (
    <ImageBackground
      source={require('../assets/images/home-1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.boldText}>{'Projects List'}</Text>
          <Text style={[Typography.body2, { color: 'white' }]}>{'All the Lorem Ipsum generators on the Internet tend to repeat.'}</Text>
        </View>
        <SearchInput />
      </View>
    </ImageBackground>
  )
}

export default Header;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    gap: 20,
    maxHeight: 220
  },
  boldText: {
    ...Typography.h1,
    fontWeight: '500',
    color: 'white'
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  }
})