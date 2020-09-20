import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';
import {FONTS} from '../constants/Fonts';
import Lessons from '../screens/Course/Lessons';
import AllCourse from '../screens/MyCourse/AllCourse';
import Following from '../screens/Profile/Following';

const Tab = createMaterialTopTabNavigator();

export default function ProfileTabs() {
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
        name="Courses"
        component={AllCourse}
        options={{tabBarLabel: 'Courses'}}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{tabBarLabel: 'Following'}}
      />
    </Tab.Navigator>
  );
}
