import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { styles } from './OnboardingBackdrop.styles';

const OnboardingBackdrop = ({
    backgroundColor
}) => {
    return (
        <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor: backgroundColor}]}/>
    );
};

export default OnboardingBackdrop;
