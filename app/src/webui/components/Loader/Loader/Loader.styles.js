import { StyleSheet } from 'react-native';

import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderWrapper: {
        width: '80%',
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    loadingText: {
        color: colors.gray600,
        marginLeft: 15
    }
});
