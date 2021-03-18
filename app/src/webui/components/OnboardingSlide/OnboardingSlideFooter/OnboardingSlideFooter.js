import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './OnboardingSlideFooter.styles';
import BigButton from '../../BigButton/BigButton';
import {colors} from '../../../modules/styles/colors.styles';
import Paginator from '../../Paginator/Paginator';

const OnboardingSlideFooter = ({
    width,
    height,
    description,
    subtitle,
    lastSlide,
    onNextButtonPress
}) => {
    return (
        <View style={[styles.onboardingSlideFooterContainer, { width: width, height: height }]}>
            <Text style={styles.slideSubtitle}>{subtitle}</Text>
            <Text style={styles.slideDescription}>{description}</Text>
            <View style={styles.buttonWrapper}>
                <BigButton
                    backgroundColor={lastSlide ? colors.blue : colors.gray200}
                    fontColor={lastSlide ? colors.white : colors.gray800}
                    rippleColor={lastSlide ? null : colors.gray400}
                    buttonText={lastSlide ? 'Get started' : 'Next'}
                    onPress={onNextButtonPress}
                />
            </View>
        </View>
    );
};

export default OnboardingSlideFooter;
