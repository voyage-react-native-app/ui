import { StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    onboardingSlideHeaderContainer: {
        justifyContent: 'center',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
        shadowColor: colors.gray900,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 3,
        overflow: 'hidden',
        position: 'relative'
    },
    imageWrapper: {
        position: 'absolute',
        left: 40
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
