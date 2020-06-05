import React from 'react';
import { FlatList } from 'react-native';

import Box from './Box';
import Text from './Text';

import { SimpleCardContainer, SimpleCardTitle } from './SimpleCard';

function SearchHistoryList ({ data }) {
    return (
        <FlatList data={data} keyExtractor={item => item.id} renderItem={({ item }) => (
            <Box py={6}>
                <SimpleCardContainer onPress={() => navigation.navigate('Details')}>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                </SimpleCardContainer>
            </Box>
        )} ListHeaderComponent={<Text color="textLight" mb={10}>Son Aramalar</Text>} />
    )
}

export default SearchHistoryList;