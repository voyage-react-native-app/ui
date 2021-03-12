import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationWrapper: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    location: {
        color: colors.gray900,
        fontWeight: 'bold',
        marginLeft: 5
    }
});
