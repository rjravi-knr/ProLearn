import React from 'react';
import {View, Text} from 'react-native';
import PlView from '../../ui-elements/PlView';
import UserListItem from '../../components/User/UserListItem';
import {ReviewData} from '../../data/ReviewData';
import _ from 'lodash';

const Following = () => {
  return (
    <PlView>
      {_.map(ReviewData, item => {
        return (
          <UserListItem
            name={item.name}
            profession={item.profession}
            profile_pic={item.profile_pic}
          />
        );
      })}
    </PlView>
  );
};

export default Following;
