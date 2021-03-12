import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import { styles} from './ExpandButton.styles';
import { colors } from '../../modules/styles/colors.styles';

const ExpandButton = ({
    onPress,
    position
}) => {
    return (
        <View style={[styles.expandButton,
            {top: position.top, right: position.right, bottom: position.bottom, left: position.left}]}
        >
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(colors.gray300, true)}
            >
                <View style={styles.iconWrapper}>
                    <FontAwesomeIcon
                        icon={faExpandArrowsAlt}
                        color={colors.gray500}
                        size={20}
                    />
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default ExpandButton;
