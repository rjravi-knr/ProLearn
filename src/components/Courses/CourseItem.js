import React from 'react';
import {StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import PlView from '../../ui-elements/PlView';
import FastImage from 'react-native-fast-image';
import PlText from '../../ui-elements/PlText';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';
import {COLORS} from '../../constants/Colors';
import RatingBar from '../RatingBar';
import {useNavigation} from '@react-navigation/native';
import PlProgressBar from '../../ui-elements/PlProgressBar';
import PriceTag from '../PriceTag';

const CourseItem = props => {
  const {
    title,
    author,
    imageUrl,
    rating,
    progress,
    completed,
    onCertificateClick,
    offerdPrice,
    basePrice,
    currency,
  } = props;
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={() => navigation.navigate('CourseDetail')}>
      <PlView style={styles.container}>
        <FastImage style={styles.image} source={{uri: imageUrl}} />

        <PlView style={styles.dataContainer}>
          <PlText style={styles.title} numberOfLines={2}>
            {title}
          </PlText>
          {author ? <PlText style={styles.author}>{author}</PlText> : null}
          <PlView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(8),
            }}>
            {offerdPrice || basePrice ? (
              <PriceTag
                offerdPrice={offerdPrice}
                basePrice={basePrice}
                currency={currency}
              />
            ) : null}
            {rating ? <RatingBar stars={5} rating={rating} /> : null}
          </PlView>
          {progress ? (
            <PlProgressBar
              progress={progress}
              message={`${progress} % Completed`}
            />
          ) : null}
          {completed ? (
            <PlView style={styles.completedContainer}>
              <TouchableOpacity onPress={onCertificateClick}>
                <PlText style={styles.completedText}>View certificate</PlText>
              </TouchableOpacity>
            </PlView>
          ) : null}
        </PlView>
      </PlView>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  completedContainer: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    paddingVertical: 2,
    paddingHorizontal: normalize(8),
    alignItems: 'center',
    marginVertical: normalize(16),
    borderRadius: normalize(16),
    width: '75%',
  },
  completedText: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.PRIMARY,
    fontSize: normalize(14),
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: normalize(24),
    marginVertical: normalize(12),
  },
  image: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(8),
    elevation: 5,
    shadowOffset: {width: 3, height: 5},
    shadowColor: COLORS.LIGHT_GREY,
    shadowOpacity: 1.0,
    shadowRadius: 3,
    borderColor: COLORS.LIGHT_GREY,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: normalize(14),
    color: COLORS.BLACK,
  },
  author: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: normalize(12),
    color: COLORS.GREY,
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: normalize(16),
  },
});

export default CourseItem;
