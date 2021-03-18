import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './OnboardingSlideHeader.styles';

const OnboardingSlideHeader = ({
    label,
    backgroundColor,
    width,
    height,
    Picture
}) => {
    const transform = [
        { translateX: width / 2 - 50 },
        { rotate: '-90deg'}
    ];

    return (
        <View style={[styles.onboardingSlideHeaderContainer, { backgroundColor: backgroundColor, width: width, height: height }]}>
            <View style={styles.imageWrapper}>
                <Picture width={width / 1.75}/>
            </View>
            <View style={[styles.titleWrapper, { transform: transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    );
}

export default OnboardingSlideHeader;
