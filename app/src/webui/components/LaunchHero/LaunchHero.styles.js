import { useWindowDimensions, StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    launchHeroContainer: {
        flex: 1,
        height: useWindowDimensions.height,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 50,
        marginHorizontal: 30
    },
    heroImage: {
        maxWidth: '70%',
        maxHeight: 300
    },
    businessSummary: {
        alignItems: 'center'
    },
    slogan: {
        color: colors.gray900,
        opacity: 0.6,
        fontSize: 18,
        lineHeight: 25
    },
    getStartedButtonWrapper: {
        width: '100%'
    },
    existingAccountLoginLinkContainer: {
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    existingAccount: {
        fontSize: 14,
        color: colors.gray600
    },
    existingAccountLoginLink: {
        fontSize: 15,
        color: colors.blue600,
        fontWeight: '700',
        marginLeft: 5
    }
});
