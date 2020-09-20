import React from 'react';
import {View, Text} from 'react-native';
import PlView from '../ui-elements/PlView';
import Header from '../components/Header';

const Leaderboard = () => {
  return (
    <PlView>
      <Header gradiant title={'Leader board'} homeButton />
    </PlView>
  );
};

export default Leaderboard;
