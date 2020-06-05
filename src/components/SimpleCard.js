import React from 'react';

import Text from './Text';
import Button from './Button';

export function SimpleCardContainer({ children, ...props }) {
    return (
        <Button alignItems="flex-start" bg="white" borderRadius="normal" p={16} {...props}>
            {children}
        </Button>
    )
}

export function SimpleCardTitle({ children }) {
    return <Text fontSize={16} fontWeight="bold">{children}</Text>
}