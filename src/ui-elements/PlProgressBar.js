import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';
import {ProgressBarAndroid} from '@react-native-community/progress-bar-android';
import PlView from './PlView';
import PlText from './PlText';
import {COLORS} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import {normalize} from '../constants/Platform';

const PlProgressBar = props => {
  const {progress, message} = props;
  return (
    <PlView>
      {message ? <PlText style={styles.message}>{message}</PlText> : null}
      <PlView style={styles.progressBar}>
        <PlView
          style={[
            styles.currentProgress,
            {
              width: `${progress}%`,
              backgroundColor:
                progress <= 25
                  ? COLORS.ERROR
                  : progress > 25 && progress < 70
                  ? COLORS.WARNING
                  : COLORS.SUCCESS,
            },
          ]}
        />
      </PlView>
    </PlView>
  );
};

const styles = StyleSheet.create({
  message: {
    color: COLORS.GREY,
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
  },
  currentProgress: {
    height: normalize(8),
    borderRadius: normalize(8),
  },
  progressBar: {
    width: '100%',
    height: normalize(8),
    backgroundColor: COLORS.LIGHT_GREY,
    marginVertical: normalize(8),
    marginRight: normalize(16),
    borderRadius: normalize(8),
  },
});

export default PlProgressBar;
