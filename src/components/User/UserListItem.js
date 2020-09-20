import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import FastImage from 'react-native-fast-image';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';

const UserListItem = props => {
  const {name, profile_pic, profession} = props;
  return (
    <PlView style={styles.container}>
      <FastImage
        source={{uri: profile_pic}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <PlView style={styles.nameContainer}>
        <PlText style={styles.name}>{name}</PlText>
        <PlText style={styles.profession}>{profession}</PlText>
      </PlView>
      <TouchableOpacity style={styles.button}>
        <PlText style={styles.buttonText}>Follow</PlText>
      </TouchableOpacity>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(8),
  },
  name: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.BLACK,
  },
  profession: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    color: COLORS.GREY,
  },
  button: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(16),
    marginHorizontal: normalize(16),
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: normalize(50),
  },
  buttonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.PRIMARY,
  },
  nameContainer: {
    marginLeft: normalize(16),
    flex: 1,
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(50),
  },
});
export default UserListItem;
