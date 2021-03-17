import React, { useEffect, useState } from 'react';
import { View, Animated, Easing, ActivityIndicator, Text, useWindowDimensions, StatusBar } from 'react-native';

import { safeAreaViewCheck } from '../../../modules/styles/platform.styles';
import { styles } from './Loader.styles';
import { colors } from '../../../modules/styles/colors.styles';


const Loader = ({
    loaderDisplayed
}) => {
    const { width, height } = useWindowDimensions();

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
        Animated.timing(
            fadeAnimation,
            {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start();
    }, [loaderDisplayed]);

    return (
        <>
            {loaderDisplayed &&
                <>
                    <StatusBar
                        barStyle={'default'}
                        translucent={true}
                        backgroundColor={'black'}
                    />
                    <Animated.View style={[styles.loaderContainer, { width: width, height: height }, safeAreaViewCheck]}>
                        <View style={styles.loaderWrapper}>
                            <ActivityIndicator
                                color={colors.blue}
                                size={'large'}
                                animating
                            />
                            <Text style={styles.loadingText}>Please wait...</Text>
                        </View>
                    </Animated.View>
                </>
            }
        </>
    );
};

export default Loader;
