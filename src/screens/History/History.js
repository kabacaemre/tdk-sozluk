import React from 'react';
import { Text, StatusBar } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../../components/Box';

function HistoryScreen() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
        }, [])
    );
    return (
        <Box as={SafeAreaView} flex={1}>
            <Text>History</Text>
        </Box>
    )
}

export default HistoryScreen;
