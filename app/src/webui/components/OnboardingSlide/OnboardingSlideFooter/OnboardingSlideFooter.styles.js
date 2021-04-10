import { StyleSheet } from 'react-native';

import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    onboardingSlideFooterContainer: {
        paddingTop: 50,
        alignItems: 'center',
        paddingHorizontal: 30
    },
    slideSubtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 55,
        marginBottom: 12,
        color: colors.white
    },
    slideDescription: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 52,
        color: colors.white
    },
    buttonWrapper: {
        width: '100%',
        bottom: 30,
        position: 'absolute'
    }
});
