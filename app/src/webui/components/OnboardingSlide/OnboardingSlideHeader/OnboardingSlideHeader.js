import React from 'react';
import { View, StatusBar } from 'react-native';

import { styles } from './OnboardingSlideHeader.styles';

const OnboardingSlideHeader = ({
    label,
    backgroundColor,
    width,
    height,
    Picture
}) => {
    return (
        <View style={[styles.onboardingSlideHeaderContainer, { width: width, height: height, marginTop: StatusBar.currentHeight }]}>
            <Picture width={width } height={width / 1.65}/>
        </View>
    );
}

export default OnboardingSlideHeader;
