import React from 'react';

import Button from './Button';
import Text from './Text';

export function ActionButtons({ children, ...props }) {
    return (
        <Button minWidth="actionButton" height="actionButton" borderRadius="full" bg="white" px={8} style={{
            shadowColor: '#000',
            shadowOpacity: 0.16,
            shadowRadius: 4,
            shadowOffset: {
                width: 0,
                height: 2
            }
        }} {...props}>
            {children}
        </Button>
    )
}

export function ActionButtonsTitle({ children, ...props }) {
    return (
        <Text ml={8} color="textLight" fontWeight="bold" {...props}>{children}</Text>
    )
}
