import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import PlView from '../../ui-elements/PlView';
import Video from 'react-native-video';
import {COLORS} from '../../constants/Colors';
import VideoPlayerController from './VideoPlayerController';
import {normalize} from '../../constants/Platform';

const VideoPlayer = () => {
  return (
    <PlView>
      <Video
        resizeMode={'cover'}
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }} // Can be a URL or a local file.
        style={styles.videoPlayer}
        playInBackground={true}
        pictureInPicture={Platform.OS === 'ios' ? true : false}
        bufferConfig={{
          minBufferMs: 20000,
          maxBufferMs: 50000,
          bufferForPlaybackMs: 2000,
          bufferForPlaybackAfterRebufferMs: 3000,
        }}
        poster={'https://baconmockup.com/300/200/'}
        posterResizeMode={'cover'}
      />
      <VideoPlayerController />
    </PlView>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    height: normalize(180),
    backgroundColor: COLORS.BLACK,
  },
});

export default VideoPlayer;
