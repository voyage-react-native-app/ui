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
            <BigButton
                backgroundColor={colors.gray100}
                fontColor={colors.gray800}
                rippleColor={colors.gray300}
                buttonText={lastSlide ? 'Get started' : 'Skip'}
                onPress={onNextButtonPress}
                style={{marginBottom: 30}}
            />
        </View>
    );
};

export default OnboardingSlideFooter;
