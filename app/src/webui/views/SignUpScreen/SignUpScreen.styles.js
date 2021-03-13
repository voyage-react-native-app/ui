import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signUpScreenContainer: {
        // flexGrow: 1 is substitute for flex: 1 not working !!!!
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingTop: 140,
        marginHorizontal: 30
    },
    titleContainer: {
        width: '85%'
    },
    formWrapper: {
        width: '100%'
    },
    submitButtonWrapper: {
        width: '100%',
        marginBottom: 40
    },
    existingAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 25
    },
    signInMargin: {
        marginLeft: 5
    }
});
