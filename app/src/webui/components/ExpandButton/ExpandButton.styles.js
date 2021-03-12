import { StyleSheet } from 'react-native';
import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    expandButton: {
        width: 40,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 6,
        position: 'absolute'
    },
    iconWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
