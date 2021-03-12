import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';

import { styles} from './LoaderPillar.styles';

const LoaderPillar = ({
    delay,
    pillarColor,
    index
}) => {
    const [ pillarAnimationTranslate ] = useState(new Animated.Value(0));

    const [ pillarAnimationScale ] = useState(new Animated.Value(0));

    const animatedProperties = [pillarAnimationScale, pillarAnimationTranslate];

    animatedProperties.map(property => (
        Animated.loop(
            Animated.timing(
                property,
                {
                    toValue: 1,
                    duration: 850,
                    delay: delay,
                    useNativeDriver: true,
                    easing: Easing.linear
                }
            )
        ).start(() =>{
            Animated.timing(
                property,
                {
                    toValue: 0,
                    duration: 850,
                    delay: delay,
                    useNativeDriver: true,
                    easing: Easing.linear
                }
            )
        })
    ));

    const scale = pillarAnimationScale.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.5, 0]
    });

    const translate = pillarAnimationTranslate.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -25, -50]
    });

    const pillarAnimation = {
        transform: [{scaleX: scale}, {translateX: translate}]
    };

    return (
        < Animated.View
            style={[styles.pillar, pillarAnimation, {backgroundColor: pillarColor, width: 4*index}]}
        />
    );
};

export default LoaderPillar;
