import React from 'react';

import { Bookmark, Heart, Search } from '../components/icons';

import Box from './Box';
import Button from './Button';

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box bg="white" flexDirection="row" pb={20} style={{
      shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 20
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full" key={label}>
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
            <Button pt={6} height={56} flex={1} flexDirection="column" onPress={onPress} key={label}>
              {label === 'History' && <Bookmark color={isFocused ? "#E11E3C" : "#728291"} />}
              {label === 'Favorite' && <Heart color={isFocused ? "#E11E3C" : "#728291"} />}
              <Box size={4} mt={6} bg={isFocused ? 'red' : 'white'} borderRadius="full" />
            </Button>
          );
      })}
    </Box>
  );
}

export default TabBar;