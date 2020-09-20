import React, {Component} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import PlView from '../ui-elements/PlView';
import Header from '../components/Header';
import PlText from '../ui-elements/PlText';
import RatingBar from '../components/RatingBar';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import TutorialTabs from '../navigations/TutorialTabs';
import {ScrollView} from 'react-native-gesture-handler';
import UiContainer from '../components/UiContainer';

export default class CourseDetails extends Component {
  render() {
    return (
      <UiContainer headerGradiant scrollable footerButton={'Start taking Course'} backButton title={'Course'}>
        <ImageBackground
          style={styles.image}
          source={{
            uri:
              'https://static.vecteezy.com/system/resources/thumbnails/000/228/351/original/math-teacher-illustration.jpg',
          }}>
          <PlView gradiant transparent style={styles.overlayContainer}>
            <PlText style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {'Some Title In two line here so some more Title here  '}
            </PlText>
            <PlView style={styles.authorContainer}>
              <PlText
                style={styles.authorText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {'By Ravi Krian J'}
              </PlText>
              <RatingBar stars={5} rating={3} />
            </PlView>
          </PlView>
        </ImageBackground>
        <TutorialTabs />
      </UiContainer>
    );
  }
}

const styles = StyleSheet.create({
  authorContainer: {
    flexDirection: 'row',
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: normalize(180),
  },
  overlayContainer: {
    width: '100%',
    height: normalize(180),
    paddingVertical: normalize(16),
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: FONTS.SEMI_BOLD,
    marginHorizontal: normalize(16),
    color: COLORS.WHITE,
    fontSize: normalize(24),
  },
  authorText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.LIGHT_GREY,
    marginTop: normalize(8),
    fontSize: normalize(14),
  },
});
