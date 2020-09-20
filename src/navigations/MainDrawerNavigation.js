import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import HorizontalProfileCard from '../components/HorizontalProfileCard';
import NavBarContentCard from '../components/NavBarContentCard';
import {normalize, AppBarHeight, StatusBarHeight} from '../constants/Platform';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HorizontalProfileCard />
      <NavBarContentCard
        title={'content'}
        iconType={'FontAwesome'}
        titleIcon={'folder-open'}
        items={[
          {value: 'FlashCards', label: 'Falsh Cards'},
          {value: 'Quiz', label: 'Quiz'},
        ]}
      />
      <NavBarContentCard
        title={'settings'}
        iconType={'MaterialIcons'}
        titleIcon={'settings'}
        items={[{value: 'Notification', label: 'Notifications'}]}
      />
    </DrawerContentScrollView>
  );
}

export default function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#FFF',
        borderTopRightRadius: normalize(30),
        marginTop: AppBarHeight() + StatusBarHeight(),
        borderBottomRightRadius: normalize(30),
        width: '98%',
      }}
      drawerType={'front'}
      drawerContentOptions={{
        itemStyle: {marginVertical: normalize(8)},
      }}>
      <Drawer.Screen
        name="Home"
        component={MainBottomTabNavigator}
        options={{drawerLabel: 'Home'}}
      />
    </Drawer.Navigator>
  );
}
