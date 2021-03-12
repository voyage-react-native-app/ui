import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeroImage from '../../assets/images/svg/welcome-hero.svg';
import BigButton from '../BigButton/BigButton';
import CustomText from '../CustomText/CustomText';
import Logo from '../Logo/Logo';
import { colors } from '../../modules/styles/colors.styles';
import { styles } from './LaunchHero.styles';

const LaunchHero = ({
    displayLoader
}) => {
    const navigation = useNavigation();

    const navigateToSignupScreen = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.launchHeroContainer}>
            <HeroImage style={styles.heroImage}/>
            <View style={styles.businessSummary}>
                <Logo/>
                <CustomText>Taste the travel</CustomText>
            </View>
            <View style={styles.getStartedButtonWrapper}>
                <BigButton
                    backgroundColor={colors.blue600}
                    fontColor={colors.white}
                    buttonText={'Get Started'}
                    onPress={navigateToSignupScreen}
                />
                <View style={styles.existingAccountLoginLinkContainer}>
                    <Text style={styles.existingAccount}>Already have an account?</Text>
                    <Text style={styles.existingAccountLoginLink}>Sign In</Text>
                </View>
            </View>
        </View>
    );
};

export default LaunchHero;
