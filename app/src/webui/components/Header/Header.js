import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapPin, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import Logo from '../Logo/Logo';
import { styles } from './Header.styles';
import { colors } from '../../modules/styles/colors.styles';

const Header = ({
    location
}) => {
    return (
        <View style={styles.header}>
            <Logo
                height={30}
                fadeDuration={500}
            />
            <View style={styles.locationWrapper}>
                <FontAwesomeIcon
                    icon={faMapPin}
                    size={20}
                    color={colors.darkRed}
                />
                {location &&
                    <Text style={styles.location}>{location[0].locality}, {location[0].country_code}</Text>
                }
            </View>
        </View>
    );
};

export default Header;
