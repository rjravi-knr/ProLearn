import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import PlView from '../../ui-elements/PlView';
import Header from '../../components/Header';
import {normalize, dim} from '../../constants/Platform';
import CardContainer from '../../components/FlashCards/CardContainer';
import CardProgress from '../../components/FlashCards/CardProgress';
import CardFooter from '../../components/FlashCards/CardFooter';
import Carousel from 'react-native-snap-carousel';

const FlashCards = () => {
  _renderItem = ({item, index}) => {
    return <CardContainer itemKey={item} />;
  };
  return (
    <PlView style={{flex: 1}}>
      <Header gradiant backButton title={'Flash Cards'} />
      <PlView style={{flex: 0.1}}>
        <CardProgress />
      </PlView>
      <PlView style={{flex: 1}}>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={['1', '2', '3', '4', '5', '6']}
          renderItem={this._renderItem}
          sliderWidth={dim().width}
          itemWidth={dim().width}
          layout={'stack'}
          layoutCardOffset={`16`}
        />
      </PlView>
      <PlView style={{flex: 0.15}}>
        <CardFooter />
      </PlView>
    </PlView>
  );
};

const styles = StyleSheet.create({
  progressLayout: {
    marginVertical: normalize(8),
    width: '100%',
    backgroundColor: 'red',
  },
});

export default FlashCards;
