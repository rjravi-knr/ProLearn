import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PlView from '../ui-elements/PlView';
import Header from '../components/Header';
import FastImage from 'react-native-fast-image';
import {normalize} from '../constants/Platform';
import {COLORS} from '../constants/Colors';
import PlText from '../ui-elements/PlText';
import {FONTS} from '../constants/Fonts';
import PlCard from '../ui-elements/PlCard';
import ProfileTabs from '../navigations/ProfileTabs';
const ProfileScreen = () => {
  return (
    <PlView>
      <Header gradiant backButton title={'Profile'} />
      <ScrollView>
        <PlView
          style={{
            flexDirection: 'row',
            margin: normalize(16),
            alignItems: 'center',
          }}>
          <FastImage
            style={styles.user_image}
            source={{uri: 'https://randomuser.me/api/portraits/women/39.jpg'}}
          />
          <PlView style={styles.nameContainer}>
            <PlText style={styles.nameText}>Shweta Kumari</PlText>
            <PlText style={styles.professionText}>Student</PlText>
          </PlView>

          <FastImage
            style={styles.badge}
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/award-and-reward/128/Golden-badges-star-award-winner-512.png',
            }}
          />
        </PlView>
        <PlView style={styles.cardsContainer}>
          <PlCard style={styles.card}>
            <PlText style={styles.title}>14</PlText>
            <PlText style={styles.subTitle}>Courses</PlText>
          </PlCard>
          <PlCard style={styles.card}>
            <PlText style={styles.title}>144</PlText>
            <PlText style={styles.subTitle}>Lessons</PlText>
          </PlCard>
          <PlCard style={styles.card}>
            <PlText style={styles.title}>28</PlText>
            <PlText style={styles.subTitle}>Quizes</PlText>
          </PlCard>
        </PlView>
        <ProfileTabs />
      </ScrollView>
    </PlView>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: normalize(40),
    height: normalize(40),
  },
  nameContainer: {
    marginLeft: normalize(16),
    flex: 1,
  },
  nameText: {
    fontSize: normalize(18),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  professionText: {
    fontSize: normalize(14),
    fontFamily: FONTS.REGULAR,
    color: COLORS.GREY,
  },
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
  user_image: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(40),
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    shadowOffset: {width: 3, height: 5},
    shadowColor: COLORS.LIGHT_GREY,
    shadowOpacity: 1.0,
    shadowRadius: 4,
  },
});

export default ProfileScreen;
