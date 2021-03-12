import { StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    onboardingSlideHeaderContainer: {
        justifyContent: 'center',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75
    },
    triangleOverlay: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightColor: "transparent",
        borderTopColor: colors.white,
        position: 'absolute',
        bottom: 0,
        transform: [{ rotate: '270deg' }]
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
