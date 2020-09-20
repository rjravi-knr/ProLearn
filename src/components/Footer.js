import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PlView from '../ui-elements/PlView';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../constants/Platform';
import PlText from '../ui-elements/PlText';
import PlButton from '../ui-elements/PlButton';
import {COLORS} from '../constants/Colors';

const Footer = props => {
  const {footerGradiant,footerButtonPress, footerButton} = props;
  return (
    <PlView gradiant={footerGradiant} style={styles.footerContainer}>
      <PlButton onPress={footerButtonPress}>{footerButton}</PlButton>
    </PlView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: AppBarHeight() + StatusBarHeight(),
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
  },
});
export default Footer;
