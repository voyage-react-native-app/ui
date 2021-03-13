import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    placeTypesScreenContainer: {
        paddingTop: 50,
        marginHorizontal: 30
    },
    titleContainer: {
        width: '100%'
    },
    placeTypesContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 320,
        marginTop: 70
    },
    submitButtonWrapper: {
        position: 'absolute',
        bottom: 40,
        width: '100%',

    }
});
