import { StyleSheet } from 'react-native';

import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    loaderContainer: {
        width: '100%',
        height: '100%',
        zIndex: 10,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pillarsWrapper: {
        flexDirection: 'row'
    },
    registerButtons: {
        backgroundColor: 'black',
        width: 200,
        height: 50,
    }
});
