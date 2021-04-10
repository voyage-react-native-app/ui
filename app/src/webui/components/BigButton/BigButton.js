import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import {Icon} from 'react-native-vector-icons/dist';

import { styles } from './BigButton.styles';
import { colors } from '../../modules/styles/colors.styles';

const BigButton = ({
    backgroundColor,
    fontColor,
    buttonText,
    rippleColor = colors.blue400,
    Icon,
    onPress,
    disabled,
    style
}) => {
    return (
        <View style={[styles.bigButtonContainer, {backgroundColor: disabled ? colors.gray300 : backgroundColor}, style]}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(rippleColor, true)}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={styles.buttonTextWrapper}>
                    <Text style={[styles.buttonText, {color: fontColor}]}>
                        {Icon &&
                            <Icon/>
                        }
                        {buttonText}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default BigButton;
