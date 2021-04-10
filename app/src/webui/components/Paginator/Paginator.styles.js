import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    paginatorContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    paginatorDot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: colors.white
    }
});
