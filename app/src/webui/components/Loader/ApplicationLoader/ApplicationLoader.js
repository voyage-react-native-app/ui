import React from 'react';
import { View, StatusBar, useWindowDimensions, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClausLogo from '../../../assets/images/svg/claus-logo.svg'
import { styles } from './ApplicationLoader.styles';
import { colors } from '../../../modules/styles/colors.styles';

const ApplicationLoader = ({

}) => {
    const navigation = useNavigation();

    const { width, height } = useWindowDimensions();

    const navigate = () => {
        console.log('jes')
        navigation.navigate('Onboarding');
    };

    return (
        <View style={styles.applicationLoaderContainer}>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor={'transparent'}
            />
            <ClausLogo
                width={width/2}
                onPress={navigate}
            />
            <View style={styles.loaderIndicator}>
                <ActivityIndicator
                    animating
                    color={colors.white}
                />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </View>
    );
};

export default ApplicationLoader;
