import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { styles } from './PlaceRate.styles';
import { colors } from '../../modules/styles/colors.styles';

const PlaceRate = ({
    rate,
    absolutePosition,
    top,
    right,
    bottom,
    left
}) => {
    return (
        <View style={[styles.placeRateWrapper,
            absolutePosition && {position: 'absolute', top: top, right: right, bottom: bottom, left: left}]}>
            <FontAwesomeIcon
                icon={faStar}
                color={colors.yellow}
                size={18}
            />
            <Text style={styles.placeRate}>{rate}</Text>
        </View>
    );
};

export default PlaceRate;
