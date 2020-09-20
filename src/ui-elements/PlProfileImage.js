import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const PlProfileImage = (props) => {
    const {source,imageStyles}=props;
  return (
    <View>
      <FastImage
        source={{uri: source}}
        style={[styles.profileImage,imageStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default PlProfileImage;
