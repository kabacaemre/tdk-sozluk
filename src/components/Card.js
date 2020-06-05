import React from 'react';

import Box from './Box';
import Text from './Text';
import Button from './Button';

export function CardContainer({ children, ...props }) {
    return (
        <Button alignItems="flex-start" bg="white" borderRadius="normal" py={16} px={12} {...props}>
            <Box borderLeftWidth={3} borderLeftColor="light" pl={12}>
                {children}
            </Box>
        </Button>
    )
}

export function CardTitle({ children }) {
    return <Text fontSize={18} fontWeight="bold">{children}</Text>
}

export function CardSummary({ children }) {
    return <Text color="textMedium" fontSize={14} mt={8}>{children}</Text>
}