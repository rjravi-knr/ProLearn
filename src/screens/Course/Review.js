import React from 'react';
import {StyleSheet} from 'react-native';
import PlView from '../../ui-elements/PlView';
import PlCard from '../../ui-elements/PlCard';
import _ from 'lodash';
import {ReviewData} from '../../data/ReviewData';
import ReviewItem from '../../components/Review/ReviewItem';
import {normalize} from '../../constants/Platform';
import {isTSEnumMember} from '@babel/types';

const Review = () => {
  return (
    <PlView style={styles.container}>
      {_.map(ReviewData, item => {
        return (
          <ReviewItem
            name={item.name}
            rating={item.rating}
            review={item.review}
            profile_pic={item.profile_pic}
          />
        );
      })}
    </PlView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: normalize(16),
  },
});
export default Review;
