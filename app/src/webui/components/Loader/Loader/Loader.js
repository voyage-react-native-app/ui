import React from 'react';
import { View, Animated, ActivityIndicator, Text, useWindowDimensions, StatusBar } from 'react-native';

import { safeAreaViewCheck } from '../../../modules/styles/platform.styles';
import { styles } from './Loader.styles';
import { colors } from '../../../modules/styles/colors.styles';


const Loader = ({
    loaderDisplayed
}) => {
    const { width, height } = useWindowDimensions();

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
