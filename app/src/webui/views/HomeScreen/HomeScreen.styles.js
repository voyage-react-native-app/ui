import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    homeScreenHeaderContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    titleWrapper: {
        marginTop: 30
    },
    placesContainer: {
        backgroundColor: colors.gray100,
        padding: 30
    },
    contentLoaderWrapper: {
        width: '100%',
        marginBottom: 25,
        paddingHorizontal: 0
    }
});
