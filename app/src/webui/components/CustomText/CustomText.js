import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';
import { styles } from './CustomText.styles';

const CustomText = ({
    children,
    textFontSize = 15,
    textColor = colors.gray500,
    fontWeight = 'normal',
    onPress,
    style
}) => {
    return (
        <Text
            style={[styles.text, {fontSize: textFontSize, color: textColor, fontWeight: fontWeight}, style]}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}

export default CustomText;
