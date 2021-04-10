import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({

    legalLinks: {
        width: '100%',
        color: colors.gray500,
        textAlign: 'center',
        lineHeight: 20,
        opacity: 0.6,
        fontSize: 14,
        marginBottom: 12
    },
    legalLink: {
        color: colors.gray900,
        fontWeight: '800',
        textDecorationLine: 'underline'
    }
});
