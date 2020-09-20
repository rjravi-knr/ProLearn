import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import Modal from 'react-native-modal';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
import FastImage from 'react-native-fast-image';

const CourseCertificate = props => {
  const {isVisible,onShare} = props;
  return (
    <PlView>
      <Modal isVisible={isVisible}>
        <FastImage
          source={{uri: 'https://randomuser.me/api/portraits/men/22.jpg'}}
          style={styles.profileImage}
          resizeMode={'contain'}
        />
        <PlView style={styles.containerOuter} gradiant>
          <PlView style={styles.containerInner}>
            <PlText style={styles.congratulationText}>Congratulations !</PlText>

            <PlText style={styles.subtext}>
              You have completed the course
            </PlText>

            <PlText style={styles.subjectText}>
              " How to learn guiter in just 45 days "
            </PlText>
            <PlText style={styles.subtext}>with :</PlText>

            <PlText style={styles.scoreText}>100 %</PlText>

            <PlText style={styles.approvalText}>approval rate </PlText>

            <TouchableOpacity onPress={onShare}>
              <PlView gradiant style={styles.shareButtonContainer}>
                <PlText style={styles.shareButtonText}>
                  Share with the world
                </PlText>
              </PlView>
            </TouchableOpacity>
          </PlView>
        </PlView>
      </Modal>
    </PlView>
  );
};
const styles = StyleSheet.create({
  profileImage: {
    position: 'relative',
    zIndex: 1000,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(50),
    top: '10%',
    alignSelf: 'center',
  },
  shareButtonContainer: {
    marginTop: normalize(32),
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(24),
    borderRadius: normalize(50),
  },
  shareButtonText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.WHITE,
  },
  subjectText: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(16),
    color: COLORS.BLACK,
    marginHorizontal: normalize(16),
  },
  congratulationText: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(24),
    color: COLORS.BLACK,
    marginTop: normalize(32),
    marginBottom: normalize(16),
  },
  scoreText: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(40),
    color: COLORS.PRIMARY,
    marginTop: normalize(16),
  },
  subtext: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(16),
    color: COLORS.BLACK,
  },
  approvalText: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(16),
    color: COLORS.GREY,
  },
  containerOuter: {
    margin: normalize(16),
    borderRadius: normalize(16),
  },
  containerInner: {
    margin: normalize(16),
    padding: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
    backgroundColor: COLORS.WHITE,
  },
});
export default CourseCertificate;
