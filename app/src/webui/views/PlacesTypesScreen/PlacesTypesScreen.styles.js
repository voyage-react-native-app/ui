import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    placeTypesScreenContainer: {
        // flexGrow: 1 is substitute for flex: 1 not working !!!!
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingBottom: 30,
        marginHorizontal: 30
    },
    titleContainer: {
        width: '100%',
        marginTop: 30
    },
    placeTypesContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: 320
    },
    submitButtonWrapper: {
        marginTop: 50,
        width: '100%'
    }
});
