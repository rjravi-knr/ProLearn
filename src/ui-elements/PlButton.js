import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import PlView from './PlView';
import PlText from './PlText';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
const PlButton = props => {
  return (
    <TouchableOpacity {...props}>
      <PlView
        gradiant
        style={[styles.buttonContainer, {...props.containerStyle}]}>
        <PlText style={[styles.buttonText, {...props.buttonStyle}]}>
          {props.children}
        </PlText>
      </PlView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.WHITE,
  },
  buttonContainer: {
    borderRadius: normalize(50),
    marginHorizontal: normalize(16),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlButton;
