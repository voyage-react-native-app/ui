import React, { useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';

import LoaderPillar from '../LoaderPillar/LoaderPillar';
import { pillarColors } from '../../../modules/styles/loader.styles';
import { styles } from './Loader.styles';

const numberOfPillars = pillarColors.length;

const Loader = ({
    loaderDisplayed
}) => {
    const [ fadeAnimation ] = useState(new Animated.Value(0));

    Animated.timing(
        fadeAnimation,
        {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.linear
        }
    ).start();

    const fade = fadeAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const fadeStyle = {
        opacity: fade
    }

    useEffect(() => {
        return () => {
            Animated.timing(
                fadeAnimation,
                {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                    easing: Easing.linear
                }
            ).start();
        }
    }, []);

    return (
        <>
            {loaderDisplayed &&
                <Animated.View style={[styles.loaderContainer, fadeStyle]}>
                    <View style={styles.pillarsWrapper}>
                        {[...Array(numberOfPillars)].map((value, index) => (
                            <LoaderPillar
                                delay={index*50}
                                key={index}
                                pillarColor={pillarColors[index]}
                                index={index+1}
                            />
                        ))}
                    </View>
                </Animated.View>
            }
        </>
    );
};

export default Loader;
