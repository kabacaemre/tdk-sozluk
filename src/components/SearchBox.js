import React from 'react';
import { Keyboard } from 'react-native';

import Box from './Box';
import Input from './Input';
import Button from './Text';
import Text from './Text';

import theme from '../utils/theme';

import { Search, Close } from './icons';

function SearchBox({ onChangeFocus }) {
    const [value, setValue] = React.useState("");
    const [isFocus, setFocus] = React.useState(false);

    React.useEffect(() => {
        onChangeFocus(isFocus)
    }, [onChangeFocus, isFocus]);

    const onCancel = () => {
        setFocus(false);
        Keyboard.dismiss();
    }
    const onClear = () => {
        setValue("");
        setFocus(false);
        Keyboard.dismiss();
    }
    return (
        <Box flexDirection="row" alignItems="center">
            <Box flex={1} position="relative">
                <Input
                    style={{
                        shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 24, shadowOffset: {
                            width: 0, height: 4
                        }
                    }}
                    bg="white"
                    height={52}
                    color="textDark"
                    pl={52}
                    borderWidth={1}
                    borderColor={isFocus ? '#D1D1D1' : 'transparent'}
                    placeholder="Türkçe Sözlük'te Ara"
                    placeholderTextColor="textMedium"
                    borderRadius="normal" onFocus={() => setFocus(true)} value={value} onChangeText={text => setValue(text)} />
                <Box position="absolute" top={16} left={16}>
                    <Button style={{ padding: 0 }}>
                        <Search color={theme.colors.textMedium} />
                    </Button>
                </Box>
                {
                    value.length > 0 && <Box position="absolute" top={16} right={16}>
                        <Button style={{ padding: 0 }} onPress={onClear}>
                            <Close color={theme.colors.textDark} />
                        </Button>
                    </Box>
                }
            </Box>
            {isFocus && (
                <Button px={15} height={52} onPress={onCancel}>
                    <Text>Vazgeç</Text>
                </Button>
            )}
        </Box>
    )
}

export default SearchBox;
