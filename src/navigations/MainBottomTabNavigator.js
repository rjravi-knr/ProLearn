import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeaturedCourse from '../screens/FeaturedCourse';
import SearchCourse from '../screens/SearchCourse';
import MyCourses from '../screens/MyCourses';
import WishList from '../screens/WishList';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import Leaderboard from '../screens/Leaderboard';

const Tab = createBottomTabNavigator();

const SELECTED_COLOR = COLORS.PRIMARY;
const DEFAULT_COLOR = COLORS.GREY;

export default function MainBottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: SELECTED_COLOR,
        inactiveTintColor: DEFAULT_COLOR,
        labelStyle: {fontFamily: FONTS.SEMI_BOLD},
      }}>
      <Tab.Screen
        name="Featured"
        component={FeaturedCourse}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({color, size}) => (
            <Icons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchCourse}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Courses"
        component={MyCourses}
        options={{
          tabBarLabel: 'My Courses',
          tabBarIcon: ({color, size}) => (
            <Icons name="play" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: ({color, size}) => (
            <Icons name="heart" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="LeaderBoard"
        component={Leaderboard}
        options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({color, size}) => (
            <Icons name="poll" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
