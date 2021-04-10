import { StyleSheet } from 'react-native';
import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    onboardingSlideHeaderContainer: {
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    titleWrapper: {
        height: 100,
        justifyContent: 'center'
    },
    title: {
        fontSize: 80,
        color: colors.white,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        letterSpacing: 2
    }
});
