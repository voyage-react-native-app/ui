import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Legal.styles';

const Legal = ({

}) => {
    const navigateTo = legal => {
      console.log(legal);
    };

    return (
        <Text style={styles.legalLinks}>
            By continuing You agree to our{'\n'}
            <Text style={styles.legalLinks}>
                <Text
                    style={styles.legalLink}
                    onPress={() => navigateTo('Terms and Conditions')}
                >
                    Terms and Conditions
                </Text>
                {' '}and{' '}
                <Text
                    style={styles.legalLink}
                    onPress={() => navigateTo('Privacy Policy')}
                >
                    Privacy Policy
                </Text>
            </Text>
        </Text>
    );
};

export default Legal;
