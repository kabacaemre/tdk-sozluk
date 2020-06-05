import React from 'react';
import { Text, StatusBar } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../../components/Box';

function FavoriteScreen() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
        }, [])
    );
    return (
        <Box as={SafeAreaView} flex={1}>
            <Text>Favorite</Text>
        </Box>
    )
}

export default FavoriteScreen;
