import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signUpScreenContainer: {
        // flexGrow: 1 is substitute for flex: 1 not working !!!!
        flexGrow: 1,
        paddingTop: 140,
        marginHorizontal: 30
    },
    formWrapper: {
        width: '100%'
    },
    submitButtonWrapper: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 40
    }
});
