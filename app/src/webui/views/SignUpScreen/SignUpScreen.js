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
import { colors } from '../../modules/styles/colors.styles';
import { styles } from './SignUpScreen.styles';
import { safeAreaViewCheck } from '../../modules/styles/platform.styles';

const SignUpScreen = ({
    username,
    email,
    password,
    inputUserName,
    inputUserEmail,
    inputUserPassword,
    registerUser
}) => {
    const navigation = useNavigation();

    const store = useStore();

    const goBack = () => {
        navigation.goBack();
    }

    const dispatchInputUserName = event => {
        event.persist();
        const { text } = event.nativeEvent;
        inputUserName(text);
    };

    const dispatchInputUserEmail = event => {
        event.persist();
        const { text } = event.nativeEvent;
        inputUserEmail(text);
    };

    const dispatchInputUserPassword = event => {
        event.persist();
        const { text } = event.nativeEvent;
        inputUserPassword(text);
    };

    const register = () => {
        const data = {
            username: username,
            email: email,
            password: password
        };
        registerUser(data);
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
                    arrowColor={colors.blue}
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
                        defaultValue={username}
                        textContentType={'username'}
                    />
                    <Input
                        onTextInput={dispatchInputUserEmail}
                        placeholder={'E-mail'}
                        autoCompleteType={'email'}
                        defaultValue={email}
                        textContentType={'emailAddress'}
                    />
                    <Input
                        onTextInput={dispatchInputUserPassword}
                        placeholder={'Password'}
                        autoCompleteType={'password'}
                        autoCorrect={false}
                        defaultValue={password}
                        textContentType={'password'}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.submitButtonWrapper}>
                    <Legal/>
                    <BigButton
                        backgroundColor={colors.blue}
                        fontColor={colors.white}
                        buttonText={'Sign Up'}
                        onPress={register}
                    />
                    <View style={styles.existingAccount}>
                        <CustomText
                            textColor={colors.gray500}
                        >
                            Already have and account?
                        </CustomText>
                        <View style={styles.signInMargin}>
                            <CustomText
                                textColor={colors.blue}
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
