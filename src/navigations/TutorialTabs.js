import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import Info from '../screens/Course/Info';
import Lessons from '../screens/Course/Lessons';
import Review from '../screens/Course/Review';

const Tab = createMaterialTopTabNavigator();

export default function TutorialTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Info"
      tabBarOptions={{
        indicatorStyle: {backgroundColor: COLORS.PRIMARY},
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.GREY,
        labelStyle: {fontSize: 14, fontFamily: FONTS.SEMI_BOLD},
        style: {
          marginTop: normalize(16),
          backgroundColor: 'transparent',
          marginHorizontal: normalize(16),
          shadowOffset: {height: 0, width: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Info"
        component={Info}
        options={{tabBarLabel: 'Info'}}
      />
      <Tab.Screen
        name="Lessons"
        component={Lessons}
        options={{tabBarLabel: 'Lessons'}}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{tabBarLabel: 'Reviews'}}
      />
    </Tab.Navigator>
  );
}
