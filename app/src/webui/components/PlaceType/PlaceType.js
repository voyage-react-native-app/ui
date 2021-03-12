import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../modules/styles/colors.styles';
import { styles } from './PlaceType.styles';

const PlaceType = ({
    placeTypeName,
    placeTypeIconName,
    selectedPlaceTypes,
    selectPlaceType,
    unselectPlaceType
}) => {
    const toggleSelectPlaceType = () => {
        const isSelected = selectedPlaceTypes.includes(placeTypeName);

        if(!isSelected) {
            selectPlaceType(placeTypeName);
        } else {
            unselectPlaceType(placeTypeName);
        }
    };

    const selected = selectedPlaceTypes.includes(placeTypeName);

    return (
        <View style={styles.placeWrapper}>
            <View style={[styles.place, selected && {backgroundColor: colors.blue600}]}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(colors.blue100, true)}
                    onPress={toggleSelectPlaceType}
                >
                    <View style={styles.iconWrapper}>
                        <FontAwesomeIcon
                            icon={Icon[placeTypeIconName]}
                            size={40}
                            color={selected ? colors.white : colors.gray700}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <Text style={styles.placeName}>{placeTypeName}</Text>
        </View>
    );
};

export default PlaceType;
