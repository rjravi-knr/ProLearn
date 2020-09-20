import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';

const Logo = props => {
  return (
    <View>
      {props.text.length > 3 ? (
        <Text
          style={[
            styles.logoText1,
            {color: props.white ? COLORS.WHITE : COLORS.PRIMARY},
          ]}>
          {props.text.substring(0, 3)}
          <Text
            style={[
              styles.logoText2,
              {color: props.white ? COLORS.WHITE : COLORS.SECONDARY},
            ]}>
            {props.text.substring(3)}
          </Text>
        </Text>
      ) : (
        <Text style={styles.logoText1}>{props.text}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  logoText1: {
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    fontSize: normalize(24),
    fontFamily: FONTS.REGULAR,
  },
  logoText2: {
    marginVertical: normalize(8),
    fontSize: normalize(24),
    color: COLORS.SECONDARY,
    fontFamily: FONTS.BOLD,
  },
});
export default Logo;
