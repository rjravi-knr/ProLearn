import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import PlView from '../../ui-elements/PlView';
import CardFlip from 'react-native-card-flip';
import {normalize} from '../../constants/Platform';
import QuestionCard from './QuestionCard';
import AnswerCard from './AnswerCard';

const CardContainer = props => {
  return (
    <PlView style={styles.container}>
      <CardFlip
        style={styles.cardContainer}
        ref={card => (this[`card${props.itemKey}`] = card)}
        flipDirection={'y'}>
        <QuestionCard onPress={() => this[`card${props.itemKey}`].flip()} />
        <AnswerCard onPress={() => this[`card${props.itemKey}`].flip()} />
      </CardFlip>
    </PlView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: normalize(300),
    alignItems: 'center',
    height: '100%',
  },
});

export default CardContainer;
