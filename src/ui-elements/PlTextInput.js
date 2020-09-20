import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from './PlView';
import PlText from './PlText';
import {FONTS} from '../constants/Fonts';
import {normalize} from '../constants/Platform';
import {COLORS} from '../constants/Colors';
import {TextInput} from 'react-native-gesture-handler';
import PlIcon from './PlIcon';

const PlTextInput = props => {
  const {placeholder, iconName, iconType} = props;
  return (
    <PlView style={[styles.inputContainer, {...props.containerStyle}]}>
      {/* <PlText style={[styles.placeholder, {...props.placeholderStyle}]}>
        {placeholder}
      </PlText> */}
      <TextInput {...props} />
      {iconName ? (
        <PlIcon name={iconName} type={iconType} size={24} style={styles.icon} />
      ) : null}
    </PlView>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 0,
    marginHorizontal: normalize(8),
  },
  inputContainer: {
    marginVertical: normalize(8),
    marginHorizontal: normalize(16),
    flexDirection: 'row',
    paddingHorizontal: normalize(8),
    alignItems: 'center',
  },
  placeholder: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(12),
  },
});

export default PlTextInput;
