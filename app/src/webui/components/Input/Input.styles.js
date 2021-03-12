import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.gray100,
        color: colors.gray700,
        fontWeight: '800',
        fontSize: 18,
        paddingHorizontal: 20,
        width: '100%',
        height: 70,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    passwordHide: {
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: [{translateY: -12.5}],
        color: colors.gray700,
        flex: 1,
        height: '100%'
    }
});
