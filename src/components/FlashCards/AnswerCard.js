import React from 'react';

import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';

import PlIcon from '../../ui-elements/PlIcon';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
const AnswerCard = props => {
  return (
    <PlView style={[styles.card]}>
      <PlView style={styles.cardActions}>
        <PlIcon
          name={'staro'}
          type={'AntDesign'}
          size={24}
          style={styles.icon}
        />
        <PlIcon
          name={'unmute'}
          type={'Octicons'}
          size={24}
          style={styles.icon}
        />
      </PlView>
      <PlText style={styles.label}>AnswerCard</PlText>
      <TouchableOpacity onPress={props.onPress}>
        <PlText style={styles.flipText}>
          <PlIcon name={'flip'} type={'MaterialIcons'} size={16} />
          Flip
        </PlText>
      </TouchableOpacity>
    </PlView>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: COLORS.WHITE,
  },
  cardActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(8),
  },
  label: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: normalize(14),
    fontFamily: FONTS.SEMI_BOLD,
    textAlign: 'center',
  },
  flipText: {
    color: COLORS.WHITE,
    fontSize: normalize(14),
    fontFamily: FONTS.SEMI_BOLD,
    alignSelf: 'flex-end',
    textAlign: 'center',
    padding: normalize(8),
  },
  card: {
    flex: 1,
    padding: normalize(8),
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    backgroundColor: COLORS.WARNING,
  },
});

export default AnswerCard;
