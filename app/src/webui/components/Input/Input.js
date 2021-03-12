import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../modules/styles/colors.styles';
import { styles } from './Input.styles';

const Input = ({
    onTextInput,
    placeholder,
    autoCompleteType,
    autoCorrect,
    defaultValue,
    textContentType,
    secureTextEntry
}) => {
    const [passwordHidden, setPasswordHidden] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordHidden(!passwordHidden);
    }

    const passwordHideProp = secureTextEntry ? passwordHidden : undefined;

    return (
        <View>
            <TextInput
                style={[styles.input, textContentType === 'password' && {paddingRight: 60}]}
                placeholder={placeholder}
                placeholderTextColor={colors.gray400}
                autocapitalize={'none'}
                onChange={onTextInput}
                autoCompleteType={autoCompleteType}
                autoCorrect={autoCorrect}
                defaultValue={defaultValue}
                textContentType={textContentType}
                secureTextEntry={passwordHideProp}
            />
            {textContentType === 'password' &&
                <Icon
                    style={styles.passwordHide}
                    name={passwordHidden ? 'eye-off' : 'eye'}
                    size={25}
                    onPress={togglePasswordVisibility}
                />
            }
        </View>
    );
};

export default Input;
