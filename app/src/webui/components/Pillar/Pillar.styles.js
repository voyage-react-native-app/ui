import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    pillarWrapper: {
        height: 38,
        borderRadius: 30,
        padding: 15,
        paddingRight: 20,
        backgroundColor: colors.blue25,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12
    },
    placeTypeName: {
        color: colors.gray700,
        fontWeight: '700',
        marginLeft: 10
    }
});
