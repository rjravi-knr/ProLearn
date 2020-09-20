import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlText from '../../ui-elements/PlText';
import RatingBar from '../RatingBar';
import PlCard from '../../ui-elements/PlCard';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
import FastImage from 'react-native-fast-image';

const ReviewItem = props => {
  const {profile_pic, name, rating, review} = props;
  return (
    <PlCard style={styles.card}>
      <PlView style={styles.userInfo}>
        <FastImage
          source={{uri: profile_pic}}
          style={styles.image}
          resizeMode={'contain'}
        />
        <PlView>
          <PlText style={styles.name}>{name}</PlText>
          <RatingBar stars={5} rating={rating} />
        </PlView>
      </PlView>
      <PlText style={styles.review}>{review}</PlText>
    </PlCard>
  );
};

const styles = StyleSheet.create({
  image: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(40),
    backgroundColor: 'red',
    marginRight: normalize(16),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    padding: normalize(16),
    borderRadius: normalize(8),
  },
  name: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(16),
    color: COLORS.BLACK,
  },
  review: {
    fontFamily: FONTS.REGULAR,
    fontSize: normalize(14),
    marginVertical: normalize(16),
    color: COLORS.GREY,
  },
});

export default ReviewItem;
