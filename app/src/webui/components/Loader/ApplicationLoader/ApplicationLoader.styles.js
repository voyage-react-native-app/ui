import { StyleSheet } from 'react-native';
import { colors } from '../../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    applicationLoaderContainer: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderIndicator: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loadingText: {
        color: colors.white,
        marginLeft: 10
    }
});
