import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlCard from '../../ui-elements/PlCard';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
import {ParagraphContent} from '../../data/ParagraphContent';

const Info = () => {
  return (
    <PlView>
      <PlView style={styles.cardsContainer}>
        <PlCard style={styles.card}>
          <PlText style={styles.title}>23</PlText>
          <PlText style={styles.subTitle}>Lessons</PlText>
        </PlCard>
        <PlCard style={styles.card}>
          <PlText style={styles.title}>12</PlText>
          <PlText style={styles.subTitle}>Excercies</PlText>
        </PlCard>
        <PlCard style={styles.card}>
          <PlText style={styles.title}>10k</PlText>
          <PlText style={styles.subTitle}>Students</PlText>
        </PlCard>
      </PlView>
      <PlText style={styles.content}>{ParagraphContent.SET_1}</PlText>
    </PlView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(8),
  },
  title: {
    fontFamily: FONTS.EXTRA_BOLD,
    fontSize: normalize(24),
    color: COLORS.PRIMARY,
  },
  subTitle: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    color: COLORS.GREY,
  },
  card: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(16),
    borderRadius: normalize(8),
    marginVertical: normalize(16),
  },
  content: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    margin: normalize(16),
    color: COLORS.BLACK,
    lineHeight:normalize(24)
  },
});

export default Info;
