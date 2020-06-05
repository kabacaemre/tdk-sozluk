import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../../components/Box';
import Text from '../../components/Text';
import { ActionButtons, ActionButtonsTitle } from '../../components/ActionButtons';
import { DetailItemContainer } from '../../components/DetailItem';

import { Favorite, Sound, Hand } from '../../components/icons';
import theme from '../../utils/theme';

function DetailScreen({route}) {
    const keyword = route.params?.keyword;
    const [data, setData] = React.useState(null);

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('dark-content');
        }, [])
    );

    const getDetailData = async () => {
        const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
        const data = await response.json()
        setData(data[0])
    }
    
    React.useEffect(() => {
        getDetailData()
    }, []);

    return (
        <Box as={SafeAreaView} flex={1} bg="softRed">
            <Box as={ScrollView} p={16}>
                <Box>
                    <Text fontSize={32} fontWeight="bold">{keyword}</Text>
                    {data?.telaffuz || data?.lisan ? (
                        <Text color="textLight" mt={6}>
                        {data?.telaffuz && data?.telaffuz} {data?.lisan}
                        </Text>
                    ) : null}
                </Box>
                <Box flexDirection="row" mt={24}>
                    <ActionButtons>
                        <Sound width={24} height={24} color={theme.colors.textLight} />
                    </ActionButtons>
                    <ActionButtons ml={12}>
                        <Favorite width={24} height={24} color={theme.colors.textLight} />
                    </ActionButtons>
                    <ActionButtons ml="auto" flexDirection="row">
                        <Hand width={24} height={24} color={theme.colors.textLight} />
                        <ActionButtonsTitle>Türk İşaret Dili</ActionButtonsTitle>
                    </ActionButtons>
                </Box>
                <Box mt={32}>
                    {data
                        ? data.anlamlarListe.map(item => (
                            <DetailItemContainer
                                key={item.anlam_sira}
                                data={item}
                                border={item.anlam_sira !== '1'}
                            />
                        )) : null
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default DetailScreen;
