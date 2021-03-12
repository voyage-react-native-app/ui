import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';
import { styles } from './CustomText.styles';

const CustomText = ({
    children,
    textFontSize = 15,
    textColor = colors.gray500,
    fontWeight = 'normal',
    onPress
}) => {
    return (
        <View style={styles.textWrapper}>
            <Text
                style={[styles.text, {fontSize: textFontSize, color: textColor, fontWeight: fontWeight}]}
                onPress={onPress}
            >
                {children}
            </Text>
        </View>
    );
}

export default CustomText;
