import React from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../../components/Box';
import HomeSearch from '../../components/HomeSearch';
import SearchHistoryList from '../../components/SearchHistoryList';
import SuggestionCard from '../../components/SuggestionCard';

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item 1',
        summary: 'açıklama 1'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item 2',
        summary: 'açıklama 2'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item 3',
        summary: 'açıklama 3'
    }
]

function SearchScreen({ navigation }) {
    const [isSearchFocus, setSearchFocus] = React.useState();
    const [homeData, setHomeData] = React.useState(null);

    const getHomeData = async () => {
        const response = await fetch("https://sozluk.gov.tr/icerik");
        const data = await response.json();
        setHomeData(data);
    }

    React.useEffect(() => {
        getHomeData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
        }, [isSearchFocus])
    );
    return (
        <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
            <HomeSearch 
                isSearchFocus={isSearchFocus} 
                onSearchFocus={setSearchFocus} />
            <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
                {isSearchFocus ? (
                    <Box flex={1} mt={40} px={16}>
                        <SearchHistoryList data={data} />
                    </Box>
                ) : (
                        <Box flex={1} px={16}>
                            <SuggestionCard 
                                data={homeData?.kelime[0]} 
                                title="Bir Kelime" 
                                onPress={() => navigation.navigate('Details', { keyword: homeData?.kelime[0].madde })} />
                            <SuggestionCard 
                                data={homeData?.atasoz[0]} 
                                title="Bir Deyim - Atasözü" 
                                onPress={() => navigation.navigate('Details', { keyword: homeData?.atasoz[0].madde })} />
                        </Box>
                    )}
            </Box>
        </Box >
    )
}

export default SearchScreen;