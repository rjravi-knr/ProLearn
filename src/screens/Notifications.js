import React from 'react';
import {View, Text} from 'react-native';
import UiContainer from '../components/UiContainer';
import _ from 'lodash';
import {NotificationData} from '../data/NotificationData';
import NotificationItem from '../components/Notifications/NotificationItem';
const Notifications = () => {
  return (
    <UiContainer
      scrollable
      noFooter
      headerGradiant
      backButton
      title={'Notifications'}>
      {_.map(NotificationData, item => {
        return (
          <NotificationItem message={item.message} dateTime={item.dateTime} />
        );
      })}
    </UiContainer>
  );
};

export default Notifications;
