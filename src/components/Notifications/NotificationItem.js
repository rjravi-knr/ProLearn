import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
const NotificationItem = props => {
  const {message, dateTime} = props;
  return (
    <PlView style={styles.container}>
      <PlText style={styles.message} numberOfLines={2} ellipsizeMode="tail">
        {message}
      </PlText>
      <PlText style={styles.dateTime}>{dateTime}</PlText>
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
    marginVertical: normalize(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: COLORS.WHITE,
    elevation: 3,
    borderRadius: normalize(8),
  },
  dateTime: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(12),
    color: COLORS.LIGHT_GREY,
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
  },
  message: {
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.BLACK,
  },
});

export default NotificationItem;
