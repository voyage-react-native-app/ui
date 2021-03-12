import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

import { styles } from './Pillar.styles';

const Pillar = ({
    children,
    iconName
}) => {
    return (
        <View style={styles.pillarWrapper}>
            <FontAwesomeIcon
                icon={Icon[iconName]}
                size={20}
            />
            <Text style={styles.placeTypeName}>{children}</Text>
        </View>
    );
};

export default Pillar;
