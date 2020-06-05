import React from 'react';
import { Animated } from 'react-native';

import Box from './Box';
import Bg from './Bg';
import SearchBox from './SearchBox';

import { Logo } from './icons';

const HERO_HEIGHT = 230;

function HomeSearch ({ isSearchFocus, onSearchFocus }) {
    const [bgOpacity] = React.useState(new Animated.Value(1));
    const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT));
    
    React.useEffect(() => {
        if (isSearchFocus) {
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 230
            }).start()
            Animated.timing(heroHeight, {
                toValue: 52 + 32,
                duration: 230
            }).start()
        } else {
            Animated.timing(bgOpacity, {
                toValue: 1,
                duration: 230
            }).start()
            Animated.timing(heroHeight, {
                toValue: HERO_HEIGHT,
                duration: 230
            }).start()
        }
    }, [bgOpacity, heroHeight, isSearchFocus]);

    const opacityStyles = {
        opacity: bgOpacity
    }

    const heightStyles = {
        height: heroHeight
    }
    return (
        <Box as={Animated.View} position="relative" zIndex={1} style={heightStyles}>
            <Box as={Animated.View} mt={-60} style={opacityStyles}>
                <Bg pt={60} pb={26}>
                    <Box flex={1} alignItems="center" justifyContent="center">
                        <Logo width={120} color="white" />
                    </Box>
                </Bg>
            </Box>
            <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42} p={16} width="100%">
                <SearchBox onChangeFocus={status => onSearchFocus(status)} />
            </Box>
        </Box>
    )
}

export default HomeSearch;