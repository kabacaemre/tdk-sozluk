import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from './utils/theme';
import Button from './components/Button';

import HistoryScreen from './screens/History/History';
import SearchScreen from './screens/Search/Search';
import FavoriteScreen from './screens/Favorite/Favorite';
import DetailScreen from './screens/Detail/Detail';

import TabBar from './components/TabBar';

import { Left, More } from './components/icons';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Home" component={SearchScreen} options={() => {
        return {
          headerShown: false
        }
      }} />
      <SearchStack.Screen name="Details" component={DetailScreen} options={({ route, navigation }) => {
        return {
          title: route.params?.title,
          headerStyle: {
            backgroundColor: theme.colors.softRed,
            shadowColor: 'transparent'
          },
          headerLeft: () => (
            <Button
              px={20}
              height="100%"
              onPress={() => navigation.goBack()}>
              <Left color={theme.colors.textDark} />
            </Button>
          ),
          headerRight: () => (
            <Button
              px={20}
              height="100%"
              onPress={() => navigation.navigate('Home')}>
              <More color={theme.colors.textDark} />
            </Button>
          )
        }
      }} />
    </SearchStack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;