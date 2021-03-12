import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signUpScreenContainer: {
        // flexGrow: 1 is substitute for flex: 1 not working !!!!
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingTop: 160,
        marginHorizontal: 30
    },
    titleContainer: {
        width: '85%'
    },
    formWrapper: {
        width: '100%'
    },
    submitButtonWrapper: {
        width: '100%'
    },
    existingAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        marginBottom: 30
    },
    signInMargin: {
        marginLeft: 5
    }
});
