import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    paginatorContainer: {
        flexDirection: 'row'
    },
    paginatorDot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: colors.white
    }
});
