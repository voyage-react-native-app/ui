import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

import { styles } from './Paginator.styles';
import { colors } from '../../modules/styles/colors.styles';

const Paginator = ({
    onboardingData,
    scrollX
}) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.paginatorContainer}>
            {onboardingData.map((_, index) => {
                // Previous dot, current dot, next dot
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 25, 10],
                    extrapolate: 'clamp'
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                });

                return <Animated.View
                    style={[styles.paginatorDot, {width: dotWidth, opacity}]}
                    key={index}
                />
            })}
        </View>
    );
};

export default Paginator;
