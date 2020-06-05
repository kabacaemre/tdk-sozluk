import { TextInput } from 'react-native';
import styled from 'styled-components';

import theme from '../utils/theme';

import { compose, color, size, space, typography, borderRadius, shadow } from 'styled-system';

const Input = styled(TextInput).attrs(props => ({
    placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(
    compose(
        color, size, space, typography, borderRadius, shadow
    )
);

export default Input;