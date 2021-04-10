import React from 'react';
import { Animated, StyleSheet } from 'react-native';

import { styles } from './OnboardingSquare.styles';

const OnboardingSquare = ({
    scrollX,
    backgroundColor,
    width,
    height
}) => {
    const squareTransform = Animated.modulo(
        Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ),
        1
    );

    const rotate = squareTransform.interpolate({
       inputRange: [0, .5, 1],
       outputRange: ['35deg', '0deg', '35deg']
    });

    const translateX = squareTransform.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, - height, 0]
    });

    return (
        <Animated.View style={[styles.square,
            { width: height, height: height,
                transform: [{ rotate }, { translateX }], top: - height * 0.6, left: - width * 0.55 }]}
        />
    );
};

export default OnboardingSquare;
