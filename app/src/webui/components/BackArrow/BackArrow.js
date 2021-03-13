import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { styles } from './BackArrow.styles';

const BackArrow = ({
    backgroundColor,
    arrowColor,
    onPress,
    rippleColor,
    left = 0,
    top = 50
}) => {
    return (
        <View style={[styles.backArrowContainer, {backgroundColor: backgroundColor, left: left, top: top}]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(rippleColor, true)}
            >
                <View style={styles.backArrowWrapper}>
                    <Icon
                        name={'arrow-left'}
                        size={30}
                        color={arrowColor}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default BackArrow;
