import { StyleSheet } from 'react-native';

import { colors } from '../../modules/styles/colors.styles';

export const styles = StyleSheet.create({
    placeContainer: {
        width: '100%',
        height: 280,
        marginBottom: 25
    },
    placeImageSize: {
        width: '100%',
        height: 190
    },
    placeImage: {
        borderRadius: 12,
        resizeMode: "cover",
        justifyContent: "center"
    },
    infoContainer: {
        marginTop: 10,
        width: '100%'
    },
    titleAndRateWrapper: {
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeTypesIconsListWrapper: {
        maxWidth: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 5
    },
    placeTypeIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeTypeName: {
        color: colors.gray500
    },
    bullet: {
        fontSize: 3,
        color: colors.gray500,
        marginHorizontal: 8
    }
});
