import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
import PlIcon from '../../ui-elements/PlIcon';
import {useNavigation} from '@react-navigation/native';

const LessonItem = props => {
  const {title, time, sl_no, type} = props;
  const navigation = useNavigation();
  return (
    <PlView>
      <TouchableOpacity onPress={() => navigation.navigate('VideoLesson')}>
        <PlView style={styles.card}>
          <PlView style={styles.slNoContainer}>
            <PlText style={styles.slNoText}>{sl_no}</PlText>
          </PlView>
          <PlView style={styles.textContainer}>
            <PlText style={styles.title}>{title}</PlText>
            <PlText style={styles.time}>{time}:00 Minutes</PlText>
          </PlView>
          <PlView style={styles.typeContainer}>
            <PlIcon
              name={type}
              type={'FontAwesome5'}
              size={16}
              style={styles.typeText}
            />
          </PlView>
        </PlView>
        <PlView style={styles.divider} />
      </TouchableOpacity>
    </PlView>
  );
};
const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: COLORS.LIGHT_GREY,
  },
  card: {
    padding: normalize(16),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  slNoContainer: {
    flex: 0.2,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  typeContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slNoText: {
    fontSize: normalize(14),
    color: COLORS.GREY,
    fontFamily: FONTS.SEMI_BOLD,
  },
  typeText: {
    fontSize: normalize(16),
    color: COLORS.LIGHT_GREY,
  },
  title: {
    color: COLORS.BLACK,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
  },
  time: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GREY,
    fontSize: normalize(14),
  },
});
export default LessonItem;
