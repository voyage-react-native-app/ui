import React from 'react';
import { StatusBar, View, useWindowDimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BackArrow from '../../components/BackArrow/BackArrow';
import Input from '../../components/Input/Input';
import BigButton from '../../components/BigButton/BigButton';
import Title from '../../components/Title/Title';
import CustomText from '../../components/CustomText/CustomText';
import Legal from '../../components/Legal/Legal';
import { inputUserEmail, inputUserName, inputUserPassword, registerUser } from '../../redux/actions/actions';
import { colors } from '../../modules/styles/colors.styles';
import { styles } from './SignUpScreen.styles';
import { safeAreaViewCheck } from '../../modules/styles/platform.styles';

const SignUpScreen = ({

}) => {
    const navigation = useNavigation();

    const store = useStore();

    const goBack = () => {
        navigation.goBack();
    }

    const dispatchInputUserName = event => {
        event.persist();
        const { text } = event.nativeEvent;
        store.dispatch(inputUserName(text));
    };

    const dispatchInputUserEmail = event => {
        event.persist();
        const { text } = event.nativeEvent;
        store.dispatch(inputUserEmail(text));
    };

    const dispatchInputUserPassword = event => {
        event.persist();
        const { text } = event.nativeEvent;
        store.dispatch(inputUserPassword(text));
    };

    const dispatchRegisterUser = () => {
        const data = {
            username: store.getState().user.username,
            email: store.getState().user.email,
            password: store.getState().user.password
        };
        store.dispatch(registerUser(data));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={[styles.signUpScreenContainer,
                    { height: useWindowDimensions().height }, safeAreaViewCheck]}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <BackArrow
                    backgroundColor={colors.blue100}
                    arrowColor={colors.blue600}
                    onPress={goBack}
                    rippleColor={colors.blue300}
                />
                <View style={styles.titleContainer}>
                    <Title>Let's get it started!</Title>
                    <CustomText>Create an account to better manage your travels</CustomText>
                </View>
                <View style={styles.formWrapper}>
                    <Input
                        onTextInput={dispatchInputUserName}
                        placeholder={'Username'}
                        autoCompleteType={'username'}
                        defaultValue={store.getState().user.username}
                        textContentType={'username'}
                    />
                    <Input
                        onTextInput={dispatchInputUserEmail}
                        placeholder={'E-mail'}
                        autoCompleteType={'email'}
                        defaultValue={store.getState().user.email}
                        textContentType={'emailAddress'}
                    />
                    <Input
                        onTextInput={dispatchInputUserPassword}
                        placeholder={'Password'}
                        autoCompleteType={'password'}
                        autoCorrect={false}
                        defaultValue={store.getState().user.password}
                        textContentType={'password'}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.submitButtonWrapper}>
                    <Legal/>
                    <BigButton
                        backgroundColor={colors.blue600}
                        fontColor={colors.white}
                        buttonText={'Sign Up'}
                        onPress={dispatchRegisterUser}
                    />
                    <View style={styles.existingAccount}>
                        <CustomText
                            textColor={colors.gray500}
                        >
                            Already have and account?
                        </CustomText>
                        <View style={styles.signInMargin}>
                            <CustomText
                                textColor={colors.blue600}
                                fontWeight={'bold'}
                                onPress={() => console.log('screen')}
                            >
                                Sign In
                            </CustomText>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
