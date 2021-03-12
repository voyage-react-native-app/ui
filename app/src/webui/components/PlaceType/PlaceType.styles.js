import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    placeWrapper: {
        alignItems: 'center'
    },
    place: {
        width: 105,
        height: 105,
        borderRadius: 55,
        backgroundColor: colors.gray100,
        color: colors.gray600
    },
    placeName: {
        color: colors.gray500,
        fontWeight: 'bold',
        fontSize: 16,
        width: 105,
        textAlign: 'center',
        marginTop: 5,
        lineHeight: 22
    },
    iconWrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
