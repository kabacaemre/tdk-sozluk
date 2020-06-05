import React from 'react';
import { ActivityIndicator } from 'react-native';

import Box from './Box';
import Text from './Text';

import { CardContainer, CardTitle, CardSummary } from './Card';

function SuggestionCard ({ title, onPress, data }) {
    return (
        <Box mt={40}>
            <Text color="textLight" mb={10}>{title}</Text>
            <CardContainer onPress={onPress}>
                {
                    data ? (
                        <>
                            <CardTitle>{data.madde}</CardTitle>
                            <CardSummary>{data.anlam}</CardSummary>
                        </>
                    ) : (
                            <ActivityIndicator />
                        )
                }
            </CardContainer>
        </Box>
    )
}

export default SuggestionCard;