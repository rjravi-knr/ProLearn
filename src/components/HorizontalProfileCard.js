import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PlView from '../ui-elements/PlView';
import PlProfileImage from '../ui-elements/PlProfileImage';
import {COLORS} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import {normalize} from '../constants/Platform';
import {useNavigation} from '@react-navigation/native';

const HorizontalProfileCard = () => {
  const navigation = useNavigation();
  return (
    <PlView style={styles.container}>
      <PlProfileImage
        source={'https://randomuser.me/api/portraits/men/77.jpg'}
        imageStyles={styles.imageStyles}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Ravi Krian</Text>

        <Text style={styles.profession}>Student</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: normalize(18),
    marginVertical: normalize(16),
  },
  imageStyles: {
    borderWidth: 3,
    elevation: 5,
    borderColor: COLORS.WHITE,
    shadowOffset: {width: 3, height: 5},
    shadowColor: COLORS.GREY,
    shadowOpacity: 1.0,
    shadowRadius: 10,
    backgroundColor: COLORS.LIGHT_GREY,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: normalize(16),
  },
  button: {
    borderRadius: normalize(30),
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(6),
  },
  buttonText: {
    fontSize: normalize(14),
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SEMI_BOLD,
  },
  name: {
    color: COLORS.BLACK,
    fontSize: normalize(16),
    fontFamily: FONTS.BOLD,
  },
  profession: {
    color: COLORS.GREY,
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
  },
});

export default HorizontalProfileCard;
