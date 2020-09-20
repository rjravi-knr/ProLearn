import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {ParagraphContent} from '../../data/ParagraphContent';
import VideoPlayer from '../../components/Lessons/VideoPlayer';
import Header from '../../components/Header';
import UiContainer from '../../components/UiContainer';

export default class VideoLesson extends Component {
  render() {
    return (
      <UiContainer
        headerGradiant
        backButton
        scrollable
        footerButton={'Mark as completed'}
        title={' How to get a moving subject in focus'}>
        <VideoPlayer />
        <PlText style={styles.title}>
          How to get a moving subject in focus
        </PlText>
        <PlText style={styles.subTitle}>Lesson 08 of 22</PlText>
        <PlText style={styles.content}>{ParagraphContent.SET_1}</PlText>
        <PlText style={styles.content}>{ParagraphContent.SET_2}</PlText>
      </UiContainer>
      // <PlView>
      //   <Header gradiant backButton title={' How to get a moving subject in focus'} />
      //   <ScrollView>
      //     <VideoPlayer />
      //     <PlText style={styles.title}>
      //       How to get a moving subject in focus
      //     </PlText>
      //     <PlText style={styles.subTitle}>Lesson 08 of 22</PlText>
      //     <PlText style={styles.content}>{ParagraphContent.SET_1}</PlText>
      //     <PlText style={styles.content}>{ParagraphContent.SET_2}</PlText>
      //   </ScrollView>
      // </PlView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(24),
    color: COLORS.BLACK,
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
  },
  subTitle: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(14),
    color: COLORS.GREY,
    marginHorizontal: normalize(16),
  },
  content: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(16),
    color: COLORS.BLACK,
    margin: normalize(16),
  },
});
