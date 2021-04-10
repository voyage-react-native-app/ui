import React from 'react';
import { View, Text } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';
import { styles } from './Title.styles';

const Title = ({
    children,
    titleFontSize = 30,
    titleColor = colors.gray700,
    style
}) => {
    return (
        <Text style={[styles.title, {fontSize: titleFontSize, color: titleColor}, style]}>
            {children}
        </Text>
    );
}

export default Title;
