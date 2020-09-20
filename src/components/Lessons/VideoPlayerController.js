import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import {COLORS} from '../../constants/Colors';
import PlIcon from '../../ui-elements/PlIcon';
import {normalize} from '../../constants/Platform';
import Slider from '@react-native-community/slider';

const VideoPlayerController = () => {
  return (
    <PlView style={styles.container}>
      <PlView style={styles.topView}>
        <PlView style={styles.topControl}>
          <PlIcon
            name={'more-vert'}
            type={'MaterialIcons'}
            style={styles.icon}
          />
          <PlText style={styles.text}>Speed</PlText>
          <PlText style={styles.text}>Quality</PlText>
        </PlView>
      </PlView>
      <PlView style={styles.centerView}>
        <PlView style={styles.centerControl}>
          <PlIcon
            name={'step-backward'}
            type={'FontAwesome'}
            style={styles.icon}
          />
          <PlIcon
            name={'rewind-30'}
            type={'MaterialCommunityIcons'}
            style={styles.icon}
          />
          <PlIcon name={'play'} type={'FontAwesome'} style={styles.icon} />
          <PlIcon
            name={'fast-forward-30'}
            type={'MaterialCommunityIcons'}
            style={styles.icon}
          />
          <PlIcon
            name={'step-forward'}
            type={'FontAwesome'}
            style={styles.icon}
          />
        </PlView>
      </PlView>
      <PlView style={styles.bottomView}>
        <PlView style={styles.bottomControl}>
          <PlText style={styles.text}>0:24</PlText>

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={COLORS.PRIMARY}
            maximumTrackTintColor={COLORS.LIGHT_GREY}
          />
          <PlText style={styles.text}>12:34</PlText>

          <PlIcon
            name={'fullscreen'}
            type={'MaterialCommunityIcons'}
            style={styles.icon}
          />
        </PlView>
      </PlView>
    </PlView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: normalize(180),
    backgroundColor: COLORS.GRADIENT_6,
  },
  icon: {
    color: COLORS.WHITE,
    fontSize: normalize(24),
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(16),
  },
  text: {
    color: COLORS.WHITE,
    fontSize: normalize(14),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(8),
  },
  topControl: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  centerControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(16),
  },
  bottomControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topView: {flex: 0.5},
  centerView: {flex: 1, justifyContent: 'center'},
  bottomView: {flex: 0.5, justifyContent: 'center'},
  slider: {
    flex: 1,
  },
});

export default VideoPlayerController;
